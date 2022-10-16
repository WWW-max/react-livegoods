const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        // /api/banner
        // http://localhost:7788/banner
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:7788',
            changeOrigin: true, // 是否允许跨域
            pathRewrite: {
                "^/api": '', // 路径重写(/api变成空字符串)
            }
        })
    );
}