const path = require("path");
module.exports = {
  //_dirname pega o caminho até do diretório atual....
  devServer: { static: { directory: path.resolve(__dirname, "dist") } },
  entry: {
    index: "./src/index.js",
  },
  //mode: "development",
  mode: "production",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "[name].min.js",
  },
};
