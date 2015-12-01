let path = require('path');
let express = require('express');
let app = express();
var env = process.env.NODE_ENV;

let serverSettings = { client: path.resolve('./client') };

/*\ Public static route for static assets.
\*/
if (env !== "production") {
  let publicPath = path.join(serverSettings.client, 'public');
  app.use('/public', express.static(publicPath));
} else {
  app.use('/', express.static(path.resolve('client/public')));
}


/*\ Main route:
  - If the request URI does not start with `api`, serve `index.html`.
\*/
app.all(/^\/(?!api).*/, (req, res) => {
  if (env !== "production") {
    res.sendFile('index.html', {root: serverSettings.client });
  } else {
    res.sendFile('home.html', {root: path.resolve('./client/public') });
  }
});

/*\ Api route example
\*/
/* this could be cached with redis for example */
app.get('/api/data', (req, res) => {
  res.json({
    name: 'boilerplate'
  });
});

/* client handle 404 */
app.all("/404", (req, res, next) => {
  res.sendFile("index.html", {root: serverSettings.client });
});

/* catch invalid requests */
app.get('*', (req, res, next) => {
 console.log("404: " + req.originalUrl + " was not found");
 res.status(404).redirect("/404");
});

let port = process.env.PORT || 8760;
app.listen(port, function () {
  // require('open')('http://localhost:' + port);
  console.log('go to -> http://localhost:' + port);
});
