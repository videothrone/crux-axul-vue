# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-04-04
* Add animation to header nav links on mobile
* Rebuild artist filter to own styled component
* Add dynamic font scaling via utopia.fyi
* UnifrakturCook font ascent / decent
* Add role and aria attributes to »Loader« component
* Add safe dependency update script
* Update dependencies

## [1.1.3] - 2026-02-15
* Add custom Vite plugin to preload latest release image
* Add Netlify caching/security headers & optimize build config
* Relax robots.txt: allow major search engines
* Remove HTML plugin and font preloads
* Fix releaseCard image layout
* Preload fonts, add vite HTML plugin & chunks
* Add image dimensions and loading hints to Home and ReleaseCard
* Add terser dependency
* Add terser minify, drop console and CSS split
* Add font-display swap to fonts to improve loading
* Make left side of releaseDetails sticky on scroll on desktop
* Adjust SCSS order in home.scss
* Make #content__home-left sticky on scroll on desktop
* Add .nvmrc file
* Update dependencies
* Update Readme
* Adjust Home "out now" element transition
* Adjust Releases styles for filter
* Adjust artist filter to »Releases«
* Add artist filter to »Releases«
* Replace styles @import with @use in »Links«
* Reformat »ExpandableText«
* Add .npmrc
* Add vue-eslint-parser

## [1.1.2] - 2025-03-21
* Fix unicode pseudo elem position on ReleaseCard
* Add JSdoc to fetchData helper function
* Upgrade SASS @import to @use in all files
* Upgrade dependencies
* Add package-lock.json to .gitignore
* Delete package-lock.json from repo

## [1.1.1] - 2025-03-13
* Add h1 and skip-link to App view
* Add meta color-schema to index.html
* Add robots.txt
* Add browserslist to package.json

## [1.1.0] - 2025-03-08
* Fix ReleaseCard ::before link, was not stretching properly over parent container
* Adjust Home out-now container paddings and margins

## [1.0.9] - 2024-12-15
* Change ExpandableText outline to dashed border
* Readme updates

## [1.0.8] - 2024-12-09
* Add ExpandableText component
* Adjust Loader SCSS implementation
* Refactor Home component and gaps
* Refactor ReleaseDetail component and gaps
* Add margin-bottom to ReleaseCard link

## [1.0.7] - 2024-11-28
* Add variable for vertical left border
* Add left vertical border to out-now link
* Add title attr to BC iframes
* Replace screenshot in readme
* Replace secondary font /w variable
* Refactor "out-now" box on Home view /w new design

## [1.0.6] - 2024-11-18
* Add / update variables.css
* Minor class updates to main.css
* Add border and reduce font-size for Links on mobile
* Small adjustments to ReleaseCard info design
* Adjust Home top margin
* Adjust Loader position

## [1.0.5] - 2024-11-16
* Rename _helpers.scss to _utils.scss
* Refactor ReleaseLink to ReleaseCard /w proper markup
* Adjust Releases classes

## [1.0.4] - 2024-11-14
* Add ReleaseLink component, which replaces duplicate code in Releases / ReleaseDetails

## [1.0.3] - 2024-11-10
* Force newest release img height on mobile
* Fix Bandcamp iframe link HTML fallbacks

## [1.0.2] - 2024-09-29
* Update dependencies
* Add additional meta tags to index.html

## [1.0.1] - 2024-08-21
* Add release data for CXA011
* Readme updates
* Some refactoring of Home, Releases, Release and Links mostly for performance and a11y reasons

## [1.0.0] - 2024-07-25
* Inital launch version
