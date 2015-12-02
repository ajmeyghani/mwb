/*
  Using protractor for angular and non-angular apps.
  http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/
*/
exports.config = {

  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine2',
  specs: ['functional/**/*.spec.js'],

  jasmineNodeOpts: {
    showColors: true,
  },

  onPrepare: function() {
    global.isAngularSite = function(flag){
      browser.ignoreSynchronization = !flag;
    };
  }
};
