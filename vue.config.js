module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat');
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          compatConfig: {
            MODE: 2,
          },
        },
      }));
  },
  outputDir: 'build',
  css: {
    loaderOptions: {
      less: {
        additionalData: '@import "~@/styles/index.less";',
      },
    },
  },
  devServer: {
    inline: true,
    https: false, //true,
    // redirects on absolute urls, e.g. https://localhost:5001, do not work
    // we've made adjustments in Server so CORS allows all origins instead.  This is not expected to be a security concern so long as the client is a native app, not a web app with shared state.
    // these settings also wouldn't apply when running native ios or electron, so this is a dead end
    proxy: {
      '^/pkzinspector-svc': {
        target: 'https://localhost:5001',
        pathRewrite: { '^/pkzinspector-svc': '' },
        //pathRewrite: { '^https://localhost:5001': '^https://localhost:5001' },
        changeOrigin: true,
        ws: true,
      },
    },
  },
};
