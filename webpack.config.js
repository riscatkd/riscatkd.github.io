const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (_env, { mode }) => {
  const devMode = mode === 'development';

  process.env.NODE_ENV = mode;

  return {
    devServer: {
      contentBase: path.join(__dirname, '/'),
      disableHostCheck: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      https: false,
      open: true,
      overlay: true,
      port: 3001,
      publicPath: '/',
      staticOptions: {
        redirect: false
      },
      useLocalIp: true,
      watchContentBase: true,
      watchOptions: {
        poll: true
      }
    },
    devtool: devMode ? 'inline-source-map' : 'none',
    entry: {
      index: './index.js'
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    mode,
    module: {
      rules: [{
        loader: 'babel-loader',
        options: {
          env: {
            production: {
              plugins: [
                'emotion',
              ]
            },
            development: {
              plugins: [
                ['emotion', { sourceMap: true }]
              ]
            }
          },
          presets: [
            '@babel/react',
            '@emotion/babel-preset-css-prop',
            ['@babel/preset-env', {
              targets: {
                node: 10
              }
            }]
          ]
        },
        test: /\.(js|jsx|ts|tsx)$/
      },
      {
        test: /\.(png|jp(e*)g)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 5000000,
            name: 'images/[name].[ext]'
          }
        }]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            },
            svgProps: {
              xmlns: 'http://www.w3.org/2000/svg'
            }
          }
        }]
      }]
    },
    optimization: {
      usedExports: true
    },
    output: {
      filename: 'riscatkd.js',
      path: path.resolve(__dirname, './'),
      publicPath: './'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'template.html',
        filename: './index.html'
      })
    ]
  };
};
