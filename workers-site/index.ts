const CACHE_AGE = 8640000;

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent) {
  // This proxies your Pages application under the condition that your Worker
  // script is deployed on the same custom domain as your Pages project
  const response = await fetch(event.request)

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
}
