const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/eligibility/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "eligibility",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap",
        "./components": "./src/components",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "@omni-channel/mfe-ui": {
          singleton: true,
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
