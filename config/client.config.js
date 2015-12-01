var path = require('path');
var clientPath = path.resolve('./client');
var clientSrc = path.resolve(clientPath, 'src');
var webpack = require('webpack');
var env = process.env.NODE_ENV;
var isProd = (env === 'production');

var plugins = [];
if (isProd) {
  var uglify = new webpack.optimize.UglifyJsPlugin({
      mangle: false
  });
  plugins.push(uglify);
}

module.exports = {
  entry: path.resolve(clientSrc, 'main.js'),
  output: {
    filename: env === "production" ? 'bundle.min.js' : 'bundle.js',
    path: isProd ? path.resolve(clientPath, 'public/dist') : path.resolve(clientPath, 'static')
  },
  module: {
    loaders: [
       { test: /\.js$/, loader: 'babel', include: clientSrc },
       { test: /\.html$/, include: clientSrc, loader: 'raw' },
       { test: /\.less$/, include: clientSrc, loader: "style!css!less" }
     ]
  },
  plugins: plugins,
  resolve: {
    modulesDirectories: ['node_modules', clientSrc]
  }

};
