const fs = require('fs');
const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server/lib/Server');
const config = require('./webpack.config');

fs.writeFileSync('dep.js', "console.log('hello');");

const compiler = webpack(config);
// const server = new WebpackDevServer(compiler, {
//   hot: true,
//   noInfo: true,
// });

compiler.hooks.done.tap('test', () => {
  console.log('done');
});

compiler.watch({
  aggregateTimeout: 300,
}, () => {
  console.log('watch callback');
});
