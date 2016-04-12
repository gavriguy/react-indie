module.exports = {
  context: __dirname + "/example",
  entry: "./index",
  output: {
      path: __dirname + "/example",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
}
};
