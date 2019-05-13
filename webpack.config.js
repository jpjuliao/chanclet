const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
    entry: {
        fullpage: './node_modules/fullpage.js/dist/fullpage.min.js',
        scrolloverflow: './node_modules/fullpage.js/vendors/scrolloverflow.min.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]'
    },
    plugins: [
        new MergeIntoSingleFilePlugin({
            files: {
                "bundle.js": [
                    path.resolve(__dirname, 'node_modules/fullpage.js/dist/fullpage.min.js'),
                    path.resolve(__dirname, 'node_modules/fullpage.js/vendors/scrolloverflow.min.js')
                ],
                "bundle.css": [
                    path.resolve(__dirname, 'node_modules/fullpage.js/dist/fullpage.min.css'),
                ]
            }
        })
    ]
};