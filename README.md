# SFF.life

Site dedicated to efficient computing.

## To Build

- Install [Nodejs](https://nodejs.org/en/)
- Install [Hugo](https://gohugo.io/)

First time only step:

```
npm ci
```

Then to build the site:

```
hugo --cleanDestinationDir
```

The site will be found in the `./public` folder.

## To Release

The output from the build step can be hosted on any static site hoster. SFF.life is hosted on cloudflare workers and so to release a new version:

- Download [wrangler](https://developers.cloudflare.com/workers/tooling/wrangler)
- Move `wrangler.example.toml` to `wrangler.toml` and modify account_id and zone_id appropriately.
- Execute the build step earler
- Execute wrangler with:

```
wrangler publish
```
