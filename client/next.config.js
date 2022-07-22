require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  webpack(config) {
    return config;
  },
  env: {
    OP_kEY: process.env.OP_kEY,
  },
};
