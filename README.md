# Crux Axul

This Work in Progress is a rebuild of the original [Crux Axul](https://github.com/videothrone/crux-axul) site with Vue 3 in Vite. The goal is / was to create proper dynamic and linkable subpages and an easier way to build the release catalog, w/ the option to connect the whole app to a headless CMS down the line if necessary. I also wanted to re-factor the markup to [BEM](https://getbem.com/) principles and at least implement basic web accessibility.

## Tech

-  Built with Vue 3 / Vite
-  Data is fetched from multiple JSON files
-  Media queries handled /w [SASS-mq](https://www.npmjs.com/package/sass-mq)
-  Icons are pulled from [Oh, Vue Icons!](https://oh-vue-icons.js.org/)

## Features

- Home template pulls data from newest JSON entry / release
- Releases and Releases detail templates pull data from JSON in general
- Releases page can be filtered by ascending / descending releases
- Mobile puts the nav into an classic overlay /w hamburger

## To-Do

- Still some refactoring of views and CSS needed
- Design needs an overhaul
- Add "filter by artist" on Release view

## Deployment Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/734b604d-b987-4bfd-9b56-031fb0d7aea4/deploy-status)](https://app.netlify.com/sites/boisterous-stroopwafel-8da6ff/deploys)

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
