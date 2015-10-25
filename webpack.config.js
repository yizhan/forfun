'use strict';
var webpack = require('webpack'),
    path = require('path');

var APP = __dirname + '/app';

// config
module.exports = {
    context: APP,
    entry: {
        app: ['webpack/hot/dev-server','./core/bootstrap.js']
    },
    output: {
        path: APP,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel!jshint',
                exclude: /node_modules|bower_components/
            }
        ]
    }
};