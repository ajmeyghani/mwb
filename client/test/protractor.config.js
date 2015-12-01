// An example configuration file
exports.config = {

  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine2',
  specs: ['functional/**/*.spec.js'],

  // baseUrl: 'http://localhost:'+ (process.env.PORT||8558),

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
