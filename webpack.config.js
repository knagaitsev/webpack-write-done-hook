const path = require('path');

module.exports = {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.join(__dirname, 'dist'),
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  //     },
  //   ],
  // },
};
