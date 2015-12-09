# Installing CLIENT Dependencies

### FIRST MAKE SURE YOU ARE IN THE ROOT OF THE PROJECT


## NPM Packages

### FIRST MAKE SURE YOU ARE IN THE ROOT OF THE PROJECT

No-brainer, install it as a production dependency: `npm install package-name --save`.

Then simply require it: `const mod = require('package-name');`

**Example: Using a phone formatting library from npm**

```
cd app
npm i phone-formatter -S
```

then in `client/src/main.js`:

```
const phone = require('phone-formatter');
```

## Bower Packages

**Dev Dependencies**

For packages like `angular-mocks` that are for development only, use the `-D` flag to install them as dev dependencies:

    `bower install name-of-package -D`

**Production Dependencies**

Use the `--save` or `-S` flag for dependencies of the app.

eg: `bower i angular -S`

### NOTE:

When you use `require` to load a module, it will be included in the final bundle. So if you do `require('angular')`, it will load angular script in the final bundle and that's probably not something that you want. Just be aware that everytime that you use the `require` method to load modules, it will be included in the final bundle.

#### Shimming Front-end Packages

When you require a bower package to be included in the final bundle, there could be a chance that the package is not written in correct UMD format. In that case, see which of the following applies and follow the recipe for each case.

- If you want the package to be available on the `window`, use require without any [loaders](https://webpack.github.io/docs/loaders.html). If that doesn't work use the [expose loader](https://github.com/webpack/expose-loader):

    `require('expose?window.someName!bower/name-of-package/file.js');`

- If you want to export the package to a variable simply require it:

    `var mod = require('bower/name-of-package/file.js');`

    If that doesn't work, use the [exports loader](https://github.com/webpack/exports-loader), replacing `variableName` with the variable name that you want to export from the file:

    `var mod = require('exports?variableName!bower/name-of-package/file.js');`


- If you simply want to execute a script in the global context, use the [script loader](https://github.com/webpack/script-loader) _**Use this as the last resort**_:

    `require(script!bower/name-of-package/files.js);`
