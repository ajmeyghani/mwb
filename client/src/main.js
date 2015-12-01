/*\
 * Load some css
\*/
require('main.css');

/*\
 * Set the angular module.
 * We are using the `_lib_` to indicate that
 * `lib` is loaded via CDN or a script tag and
 * will not be included in the final bundle. This
 * is set in the `externals` field in `config/client.config`
\*/
const boiler = require('_angular_').module('mymodulename', []);

/*\
 * A basic contorller
\*/
boiler.controller('AppCtrl', function () {
  this.name = `hello boiler`;
});

/*\                                    /*\
 * -- Interesting stuff starts here --  *
\*/                                    /*\

/*\
 * Loading a large image
\*/
const largImg = require('large.png');


/*\
 * Loading a small asset (png icon)
\*/
const icon = require('icon.png');
/*\
 * Using the png inside a directive
\*/
boiler.directive('myimage', function () {
  return {
    restrict: 'E',
    template: `<div><image src=${icon}></div>`
  };
});

/*\
 * Loading an html template
\*/
const helloTpl = require('hello.tpl.html');
/*\
 * Using ES6 Syntax
 * Also, using the template (helloTpl) loaded by webpack inside a directive
\*/
boiler.directive('hello', () => ({
  restrict: 'E',
  template: helloTpl
}));

/*\
 * Export the module at the end
 * Important to use `module.exports` explicitly
\*/
module.exports = boiler;
