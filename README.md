# MUI Styled-Engine SSR reproduction

This repo is an example of broken styles in SSR due to the cache reuse in @mui/styled-engine

## How-To

### Setup

1.  Install Dependencies
```sh
yarn install
```
2.  Run Development Server
```sh
yarn run dev
```
3.  View the Rendered App
```
open http://localhost:8080
```

### Reproduce Broken Styles
1.  Disable Javascript in your browser
2.  Reload the page at least once (the first server render uses a clean style cache, so works as expected)
3.  See that the expected green page is now red

    Body has a red style, but the page content should override with green background

## See the fix

Checkout the `styled-engine-patch` branch or see [this PR](https://github.com/robbtraister/mui-ssr-repro/pull/1).
