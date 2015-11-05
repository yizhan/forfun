
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        // configuration

        context: APP,
        entry: {
            app: ['webpack/hot/dev-server','./index.js']
        },
        output: {
            path: APP,
            filename: 'bundle.js'
        }

    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("dev-webpack", function(callback) {
    // Start a webpack-dev-server

    // modify some webpack config options
  	var myConfig = Object.create(webpackConfig);
  	webpackConfig.devtool = "eval";
  	webpackConfig.debug = true;

  	// Start a webpack-dev-server
  	new WebpackDevServer(webpack(webpackConfig), {
        hot: true
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
            if(err) throw new gutil.PluginError("webpack-dev-server", err);
            // Server listening
            gutil.log("[webpack/hot/dev-server]", "http://localhost:8080/webpack-dev-server/app/index.html");

            // keep the server alive or continue?
            // callback();
    });
});
