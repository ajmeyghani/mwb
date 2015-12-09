## Frameworks & Languages

### Folder structure
- All the client source code goes in the `client/src`

### Frameworks and Languages

- Testing
    - All the tests are written in CoffeeScript for convenience, but you can still write them in vanilla JavaScript.
    - Testing framework: Jasmine. The configuration is set at `client/test/testem.json`
    - Test runner: testem
    - Any file that is in `client/test/unit` is loaded for unit tests. This configuration is set at `client/test/testem.json`
    - If you prefer phantomjs for the runner, install it globally with `npm install -g phantomjs` and add it to the list of browsers in `test/testem.json` file:

        `"launch_in_dev": [ "Chrome", "Phantomjs" ]`

- Style authoring:

	By default, no pre-processor is used. You can use PostCSS plugins and the [PostCSS loader](https://github.com/postcss/postcss-loader) to extend your css.

- JS: ES6.

    - Any file with the `.js` extension, in the `client/src` folder and the `server/src` is passed through `babel`.
