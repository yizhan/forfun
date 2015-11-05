'use strict';
var webpack = require('webpack'),
    path = require('path');

// config
module.exports = {
    // context: APP,
    entry: {
        index: ['webpack/hot/dev-server','./index.js', './sass/index.scss', './index.html'],
        vendors: ["webpack/hot/dev-server", "angular-ui-router"]
    },
    output: {
        path: __dirname + "/build",
        filename: '[name].js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            { test: /\.html$/, exclude: /node_modules/, loader: "html-loader" },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel!jshint',
                exclude: /node_modules|bower_components/
            }
        ]
    },
    plugins: [
          new webpack.HotModuleReplacementPlugin()
    ]
};
