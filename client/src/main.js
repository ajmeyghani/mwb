require('main.css');
const app = {
  name: 'boilerplate'
};

if (IS_DEV) {
  const angular = require('angular');
}
const mymodule = angular.module('app', []);

mymodule.directive('boiler', function () {
  return {
    restrict: 'E',
    template: require('tpl.html')
  };
});

angular.element(document).ready(function () {
  angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
});

module.exports = app;
