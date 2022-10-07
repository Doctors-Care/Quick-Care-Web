const path = require("path");

module.exports = {
  resolve:{
    extensions:['.js','.jsx']
  },
  entry: path.join(__dirname, "src", "index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ],
  },
  watch: true
};
