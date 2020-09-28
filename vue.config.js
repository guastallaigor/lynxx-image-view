module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/style/_index.scss";`
      }
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
