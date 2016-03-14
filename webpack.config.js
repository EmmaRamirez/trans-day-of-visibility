module.exports = {
  context: __dirname + "/client/js",
  entry: "./src/app.main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
};
