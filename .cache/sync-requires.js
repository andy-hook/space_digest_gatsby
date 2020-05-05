const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ptodde/Desktop/space-digest-jam/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ptodde/Desktop/space-digest-jam/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ptodde/Desktop/space-digest-jam/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/ptodde/Desktop/space-digest-jam/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ptodde/Desktop/space-digest-jam/src/pages/index.js"))),
  "component---src-pages-nasa-js": hot(preferDefault(require("/Users/ptodde/Desktop/space-digest-jam/src/pages/nasa.js"))),
  "component---src-pages-spacex-launch-js": hot(preferDefault(require("/Users/ptodde/Desktop/space-digest-jam/src/pages/spacex/launch.js"))),
  "component---src-pages-spacex-spacex-js": hot(preferDefault(require("/Users/ptodde/Desktop/space-digest-jam/src/pages/spacex/spacex.js")))
}

