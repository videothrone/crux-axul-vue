# Crux Axul

This Work in Progress is a rebuild of the original [Crux Axul](https://github.com/videothrone/crux-axul) site with Vue 3 in Vite. The goal is / was to create proper dynamic and linkable subpages and an easier way to build the release catalog, w/ the option to connect the whole app to a headless CMS down the line if necessary. I also wanted to re-factor the markup to [BEM](https://getbem.com/) principles and at least implement basic web accessibility.

## Features

- Home template  pulls data from newest JSON entry / release
- Releases and Releases detail templates pull data from JSON in general
- Releases page can be filtered ascending / descending
- Mobile puts the nav into an overlay
- More TBD

## To-Do

- Still some refactoring of views and CSS needed
- Design needs and overhaul
- Add "filter by artist" on Release view


## Deployment Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/734b604d-b987-4bfd-9b56-031fb0d7aea4/deploy-status)](https://app.netlify.com/sites/boisterous-stroopwafel-8da6ff/deploys)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
