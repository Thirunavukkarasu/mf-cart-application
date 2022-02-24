const HtmlWebPackPlugin = require("html-webpack-plugin");
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new ModuleFederationPlugin({
      name: "core",
      filename: "remoteEntry.js",
      remotes: {
        "core": `core@http://kart-core.netlify.com/remoteEntry.js`,
        "product": `product@http://kart-product.netlify.com/remoteEntry.js`,
        "payment": `payment@http://kart-payment.netlify.com/remoteEntry.js`
      },
      exposes: {
        "./Button": "./src/components/Button.tsx",
        "./CounterState": "./src/states/CounterState.ts",
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
