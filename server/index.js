require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT;

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const { join } = require('path');
const { parse } = require('url');

const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();

const compression = require('compression');

function sessionCookie(req, res, next) {
  const htmlPage =
    !req.path.match(/^\/(_next|static)/) &&
    !req.path.match(/\.(js|map)$/) &&
    req.accepts('text/html', 'text/css', 'image/png') === 'text/html';

  if (!htmlPage) {
    next();
    return;
  }

  if (!req.cookies.sid || req.cookies.sid.length === 0) {
    req.cookies.sid = uuidv4();
    res.cookie('sid', req.cookies.sid);
  }

  next();
}

app.prepare().then(() => {
  const { Sentry } = require('../src/lib/sentry')(app.buildId);

  express()
    .use(Sentry.Handlers.requestHandler())
    .use(compression())
    .use(cookieParser())
    .use(sessionCookie)
    .use(cors())
    .get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '.next', pathname);
        app.serveStatic(req, res, filePath);
        return;
      }

      return handle(req, res, parsedUrl).catch((e) => {
        // use rejected promise to forward error to next express middleware
        next(e);
      });
    })
    .use(Sentry.Handlers.errorHandler())
    .use(function onError(err, req, res, next) {
      // The error id is attached to `res.sentry` to be returned
      // and optionally displayed to the user for support.
      res.statusCode = 500;
      res.end(res.sentry + '\n');
    })
    .listen(port, (err) => {
      if (err) throw err;

      console.log(
        `> Ready on http://localhost:${port} : ${dev ? 'dev' : 'prod'}`
      );
    });
});
