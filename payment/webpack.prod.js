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
        "core": `core@https://kart-core.netlify.com/remoteEntry.js`,
        "product": `product@https://kart-product.netlify.com/remoteEntry.js`,
        "payment": `payment@https://kart-payment.netlify.com/remoteEntry.js`
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
