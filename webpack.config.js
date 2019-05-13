const path = require('path');

module.exports = {
  entry: {
      fullpage: './node_modules/fullpage.js/dist/fullpage.min.js',
      fullpageScrolloverflow: './node_modules/fullpage.js/vendors/scrolloverflow.min.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};