var path = require('path');
var serverPath = path.resolve('./server');
var serverSrc = path.resolve(serverPath, 'src');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('server/node_modules')
.filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: path.resolve(serverPath, 'index'),
  target: 'node',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(serverPath, './dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: serverSrc }
    ]
  },
  externals: [ nodeModules ]
};
