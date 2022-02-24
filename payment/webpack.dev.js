const HtmlWebPackPlugin = require("html-webpack-plugin");
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new ModuleFederationPlugin({
      name: "core",
      filename: "remoteEntry.js",
      remotes: {
        "core": `core@http://localhost:3000/remoteEntry.js`,
        "product": `product@http://localhost:3001/remoteEntry.js`,
        "payment": `payment@http://localhost:3002/remoteEntry.js`
      },
      exposes: {
        "./PaymentPage": "./src/PaymentPage"
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
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
