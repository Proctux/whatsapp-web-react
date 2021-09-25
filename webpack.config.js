var path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin")
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
})

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      views: path.resolve(__dirname, "src/views/"),
      assets: path.resolve(__dirname, "src/assets"),
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
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
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[name]__[hash:base64:5]",
                },
                sourceMap: true,
              }
            },
            {
              loader: "sass-loader",
            },
            {
              loader: "postcss-loader",
            },
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            }
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                symbolId: "[name]_[hash]"
              }
            }
          ]
        }
      ]
    },
    plugins: [htmlPlugin]
}
