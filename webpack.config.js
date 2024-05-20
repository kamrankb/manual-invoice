const path = require('path');
const ASSET_PATH = process.env.APP_URL || '/';

module.exports = {
  output: {
    publicPath: ASSET_PATH,
  },
  plugins: [
      require('unplugin-vue-define-options/webpack')()
  ],
  resolve: {
    alias: {
      '@Pages': path.resolve('resources/js/Pages/'),
      '@Admin': path.resolve('resources/js/Pages/Admin'),
    },
    
  }
};