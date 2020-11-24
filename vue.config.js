module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.wumeili.top',
        changeOrigin: true,
        secare: false,
        pathRewrite: {
          '^/api': 'https://www.wumeili.top',
        }
      },
    },
  },
}
