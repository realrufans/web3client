const webpack = require("webpack");
const { parsed: myEnv } = require("dotenv").config({
  NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
  DEBUG: false,
});
module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};
