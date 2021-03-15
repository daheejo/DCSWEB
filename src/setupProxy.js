const {createProxyMidddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMidddleware({
            target: 'https://openapi.naver.com/v1/search/image', image.xml
            changeOrigin: true,
        })
    )
}