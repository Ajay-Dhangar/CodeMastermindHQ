// plugins/webpackProxy/index.js
module.exports = function (context, options) {
  return {
    name: 'custom-webpack-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        mergeStrategy: {'devServer.proxy': 'replace'},
        devServer: {
          allowedHosts: 'all',
          proxy: {
            '/zhops': {
              target: 'http://localhost:5500/',
              //router: () => 'http://localhost:5000',
              secure: false,
              changeOrigin: true,
              logLevel: 'debug',
              //headers: {
              //  Connection: 'keep-alive',
              //},
            },
          },
          //port: 8080,
          //host: '0.0.0.0',
          //hot: true,
        },
      };
    },
  };
};
