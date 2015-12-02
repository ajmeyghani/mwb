var path = require('path');
var env = process.env.NODE_ENV;
var isProd = (env === 'production');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var clientPath = path.resolve('./client');
var clientSrc = path.resolve(clientPath, 'src');
var bowerPath = path.resolve(clientPath, 'bower');

/* init plugins */
var plugins = [
  new webpack.DefinePlugin({ IS_PROD: process.env.NODE_ENV === 'production' }),
  new webpack.DefinePlugin({ IS_TEST: process.env.NODE_ENV === 'test' }),
  new webpack.DefinePlugin({ IS_DEV: process.env.NODE_ENV === undefined }),
];

/* uglify settings for prod */
if (isProd) {
  var uglify = new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false
      }
  });
  plugins.push(uglify);
}


/* init loaders with babel and asset settings */
var loaders = [
  { test: /\.js$/,          loader: 'babel', include: clientSrc },
  { test: /\.html$|\.htm$/, loader: 'raw',   include: clientSrc },
  { test: /\.(png|jpg|jpeg)$|\.(woff|woff2|ttf|eot|svg)(.*)?$/,
    loader: "url?limit=10000&name=[name][hash:6].[ext]", // spit out a file if larger than 10kb
    include: [clientSrc, bowerPath]
  }
];

/* css loader settings */
var isSeparateCss = true;
var cssLoaderSettings = {
  test:/\.css$/, loader: isSeparateCss ? ExtractTextPlugin.extract('style-loader', 'css-loader') : 'style!css'
};
if (isSeparateCss) {
  /* If you enable `separateCSS`, make sure to add main.css to index.html
      <link rel="stylesheet" href="/static/bundle/main.css">

    otherwise, you can remove the `link` tag.
  */

  plugins.push(new ExtractTextPlugin(isProd ? 'main.min.css' : 'main.css'));
}
loaders.push(cssLoaderSettings);

/* export config */
module.exports = {
  entry: path.resolve(clientSrc, 'main.js'),
  output: {
    filename: isProd ? 'bundle.min.js' : 'bundle.js',
    path:  isProd ? path.resolve('client/public/static/bundle') : path.resolve(clientPath, 'static/bundle'),
    libraryTarget: 'umd',
    library: 'mymodulename'
  },
  module: {
    loaders: loaders
  },
  plugins: plugins,
  resolve: {
    modulesDirectories: ['node_modules', clientSrc, bowerPath, clientPath]
  },
  externals: {
    /*
    `angular` refers to the global object that would exist on window
     during run time from a script tag for example.
        usage: require('_angular_').module(...);
    */
    // '_angular_': 'angular'
  }

};
