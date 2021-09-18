import {
  getAssetFromKV,
  mapRequestToAsset,
} from "@cloudflare/kv-asset-handler";

const CACHE_AGE = 8640000;
const assetCacheControl = { browserTTL: CACHE_AGE };

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

// By default the kv-asset-handler does not send a cache control header back in
// the response (interestingly enough, it used to). Not sending a cache control
// header isn't the worst as the browser will still work with the etag in the
// response and check on future requests if the resource had been modified at
// all. One can still get a 100% lighthouse score with this approach. However,
// lighthouse will recommend setting a cache policy for static assets, as
// sending no request is better than sending a request, no matter how small
// (eg: a 304 Not Modified).
//
// Our hugo setup fingerprints all assets, js, css, and images, so our worker
// will detect the incoming request's file extension and if it matches an asset
// class, we add the cache control header. Else we return undefined, which will
// trigger cloudflare's default behavior (no cache control header, but still
// transmit etags).
function calcCacheControl(event: FetchEvent) {
  const parsedUrl = new URL(event.request.url);
  const pathname = parsedUrl.pathname;
  const extension = pathname.split(".").pop();
  const cacheable = ["js", "css", "png", "jpg", "jpeg", "webp", "ico"];
  const isCacheable = extension && cacheable.indexOf(extension) !== -1;
  return isCacheable ? assetCacheControl : undefined;
}

async function handleEvent(event: FetchEvent) {
  try {
    const cacheControl = calcCacheControl(event);
    const response = await getAssetFromKV(event, {
      mapRequestToAsset,
      cacheControl,
    });
    const newResponse = new Response(response.body, response);
    newResponse.headers.set(
      "Strict-Transport-Security",
      `max-age=${CACHE_AGE}`
    );
    newResponse.headers.set("X-Frame-Options", "SAMEORIGIN");
    newResponse.headers.set(
      "Content-Security-Policy",
      "default-src 'none'; img-src 'self'; media-src 'self'; style-src 'unsafe-inline'"
    );
    newResponse.headers.set("X-XSS-Protection", "1; mode=block");
    newResponse.headers.set("X-Content-Type-Options", "nosniff");
    return newResponse;
  } catch (e) {
    let pathname = new URL(event.request.url).pathname;
    return new Response(`"${pathname}" not found`, {
      status: 404,
      statusText: "not found",
    });
  }
}
