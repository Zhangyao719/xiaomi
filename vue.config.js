module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://www.imooc.com',
        pathRewrite: { '/api': '' },
        changeOrigin: true,
        secure: true,
        '/api': ''
      }
    }
  }
}
