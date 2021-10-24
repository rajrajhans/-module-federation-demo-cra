const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins = [
        ...webpackConfig.plugins,

        new ModuleFederationPlugin({
          name: "cra",
          filename: "remoteEntry.js",
          exposes: {
            "./CRAComponent": "./src/App.js",
          },
          remotes: {
            app_2: "app_2@http://localhost:3002/remoteEntry.js",
          },
          shared: {
            react: "^17.0.2",
            "react-dom": "^17.0.2",
          },
        }),
      ];
      return webpackConfig;
    },
  },
};
