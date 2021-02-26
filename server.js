const port = 3000;
const express = require('express');
const app = express();
const spdy = require('spdy');
const fs = require('fs');
const path = require('path');
const proxy = require('express-http-proxy');
require('dotenv').config();
const expressStaticGzip = require('express-static-gzip');

//Routing
app.use(
  '/proxy',
  proxy('https://app-hrsei-api.herokuapp.com/', {
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
      // you can update headers
      proxyReqOpts.headers['Authorization'] = `${process.env.TOKEN}`;
      // you can change the method
      return proxyReqOpts;
    }
  })
);

app.use(
  '/',
  expressStaticGzip('client/dist', {
    enableBrotli: true,
    orderPreference: ['br'],
    setHeaders: function (res, path) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  })
);

//Configure SSL and server
// const options = {
//   key: fs.readFileSync(path.join(__dirname, 'key.pem')),
//   cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
//   passphrase: 'hailmithril'
// }

// spdy.createServer(options, app)
//   .listen(port, () => {
//     console.log(`HTTP/2 Express running at http://localhost:${port}`);
//   });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
