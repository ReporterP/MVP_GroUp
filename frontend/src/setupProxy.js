const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://group.ithub.software:5000',
      changeOrigin: true,
    })
  );
};