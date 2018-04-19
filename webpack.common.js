const path = require("path");
const rootPath = path.resolve( __dirname );
const source = path.join(rootPath, "js");
const nodeModules = "node_modules";

module.exports = {
  entry: path.resolve(__dirname, "js"),
  resolve: {
      modules: [rootPath, source, nodeModules],
      mainFields: ["webpack", "browserify", "web", "hobo", "main"]
  },
  output: {
    path: path.resolve(__dirname, "src/public/js"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { cacheDirectory: true }
          }
        ]
      }
    ]
  }
}
