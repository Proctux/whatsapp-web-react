var path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin")
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
})

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
    module: {
      rules: [
        {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [htmlPlugin]
}
