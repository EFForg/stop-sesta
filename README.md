## Install

1. Install Hugo
  * On macOS: `brew install hugo`
  * On Linux: install the [cross platform binary](https://gohugo.io/getting-started/installing/#quick-install) to get the latest version.
  * Verify your installation by running `hugo version`.
2. Install Node and npm
  * ex. `brew install node` on macOS.
  * Verify your installation by running `node -v` and `npm -v`.
3. `npm install` to install npm packages.

## Run locally

1. `npm start` to start the local server.
2. Visit `localhost:1313` in your browser.

## Editing the site

### Most of the HTML
The main site template is located at `layout/index.html`. It pulls in some partials from `layout/partials`.

### Logos
To add a logo:

1. Add it to `static/images/logos`.
2. Add a new entry to `data/logos` with the filename, org name, and org site url.

### Sass
The sass is located in the `sass` directory. Compiled sass goes in two places:

1. The `static/css` directory, which gets added directly to the site.
2. The `layouts/partials/ac_embed_styles.html` file. This is a little hack to let us inject the styles into the action center widget so we can style it more easily.
