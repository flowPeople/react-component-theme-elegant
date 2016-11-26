const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies

const DIST_PATH = path.resolve(__dirname, 'dist');
const DEV_PATH = path.resolve(__dirname, 'dev');
const SRC_PATH = path.resolve(__dirname, 'dev');

module.exports = {
    devtool: 'source-map',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      `${DEV_PATH}/index.js`,
      `${SRC_PATH}`,
    ],
    module: {
        loaders: [{
            exclude: /node_modules/,
            include: [
              path.join(__dirname, 'src'),
              path.join(__dirname, 'dev'),
            ],
            loader: 'babel-loader',
            query: {
                plugins: 'react-hot-loader/babel',
                presets: [
                    'es2015',
                    'react',
                    'stage-2',
                ],
            },
            test: /.jsx?$/,
        },
        {
          loader: 'style!css!postcss-js!babel',
          test: /\.css\.js$/,
        },
      ],
    },
    output: {
        filename: 'jsonresume-elegant-theme-react.dist.js',
        path: DIST_PATH,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: { extensions: ['', '.js', '.jsx'] },
};
