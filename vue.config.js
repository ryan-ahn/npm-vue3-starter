// vue.config.js
const StylelintPlugin = require("stylelint-webpack-plugin");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  chainWebpack(config) {
    // Set up all the aliases we use in our app.
    config.resolve.alias.clear().merge(require("./aliases.config"));
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        reactivityTransform: true,
      }));
  },
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        files: "src/**/*.{vue,scss}",
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@styles/reset.scss";
            @import "@styles/mixin.scss";
          `,
      },
    },
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.ts",
    },
  },
  productionSourceMap: false,
};
