var path = require('path');
var clientPath = path.resolve('./client');
var clientSrc = path.resolve(clientPath, 'src');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var env = process.env.NODE_ENV;
var isProd = (env === 'production');

var plugins = [
  new webpack.DefinePlugin({ IS_PROD: process.env.NODE_ENV === 'production' }),
  new webpack.DefinePlugin({ IS_TEST: process.env.NODE_ENV === 'test' }),
  new webpack.DefinePlugin({ IS_DEV: process.env.NODE_ENV === undefined }),
  new ExtractTextPlugin(isProd ? 'main.min.css' : 'main.css')
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
    filename: env === 'production' ? 'bundle.min.js' : 'bundle.js',
    path: path.resolve(clientPath, 'static/bundle'),
    libraryTarget: 'umd',
    library: 'mymodulename'
  },
  module: {
    loaders: [
       { test: /\.js$/,          loader: 'babel', include: clientSrc },
       { test: /\.html$|\.htm$/, loader: 'raw',   include: clientSrc },
       { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
       { test: /\.png$|\.jpg$|\.jpeg$|\.woff$|\.ttf$|\.svg$/, loader: "url?limit=10000", include: clientSrc } // spit out a file if larger than 10kb
     ]
  },
  plugins: plugins,
  resolve: {
    modulesDirectories: ['node_modules', clientSrc]
  }

};

