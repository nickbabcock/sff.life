![ci](https://github.com/nickbabcock/sff.life/workflows/ci/badge.svg)

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
