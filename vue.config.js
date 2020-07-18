module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://www.imooc.com',
        pathRewrite: { '/api': '' },
        changeOrigin: true,
        secure: true
      }
    }
  }
}
