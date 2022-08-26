const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/mp-sdk',
    createProxyMiddleware({
        target: 'https://static.treedis.com',
        changeOrigin: true
    })
  );
};