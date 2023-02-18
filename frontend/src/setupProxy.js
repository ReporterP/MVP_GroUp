const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://185.12.94.221:5000/',
      changeOrigin: true,
    })
  );
};