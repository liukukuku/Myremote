const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/xxx', {
      target: 'http://vueshop.glbuys.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/xxx': ''
      }
    }),
  )
  app.use(
    createProxyMiddleware('/apa', {
      target: 'https://blog.zdldove.top/',
      changeOrigin: true,
      pathRewrite: {
        '^/apa': ''
      }
    }),
  )
}
