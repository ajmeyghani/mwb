var path = require('path');
var clientPath = path.resolve('./client');
var clientSrc = path.resolve(clientPath, 'src');
var webpack = require('webpack');
var env = process.env.NODE_ENV;
var isProd = (env === 'production');

var plugins = [
  new webpack.DefinePlugin({ IS_PROD: process.env.NODE_ENV === "production" }),
  new webpack.DefinePlugin({ IS_TEST: process.env.NODE_ENV === "test" }),
  new webpack.DefinePlugin({ IS_DEV: process.env.NODE_ENV === undefined })
];

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
    path: path.resolve(clientPath, 'static'),
    libraryTarget: 'umd',
    library: 'mymodulename'
  },
  module: {
    loaders: [
       { test: /\.js$/,          loader: 'babel', include: clientSrc },
       { test: /\.html$|\.htm$/, loader: 'raw',   include: clientSrc }
     ]
  },
  plugins: plugins,
  resolve: {
    modulesDirectories: ['node_modules', clientSrc]
  }

};

