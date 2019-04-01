const path = require('path');

module.exports = {
    watch:true,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool:"source-map",
    devServer: {
        contentBase:path.resolve(__dirname, 'dist'),
        open:true
    },
    mode: 'none',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}