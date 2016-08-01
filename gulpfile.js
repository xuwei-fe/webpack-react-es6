var gulp = require('gulp');
var path = require('path');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var open = require('gulp-open');
var fileinclude = require('gulp-file-include');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var less = require('gulp-less');

var devPort =8080;

gulp.task('open', function () {
    gulp.src(__filename)
        .pipe(open({uri: "http://127.0.0.1:"+devPort+"/app/index.html"}));
});

gulp.task('img', function() {
    gulp.src('./img/**/*.*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('less', function() {
    gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [
                path.join(__dirname, 'less')
            ]
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build', function (callback) {
    webpack(
        webpackConfig, function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            callback();
    });
});

//用于在html文件中直接include文件
gulp.task('fileinclude', function (done) {
    gulp.src(['src/app/*.html'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('dist/app'))
        .on('end', done);
        // .pipe(connect.reload())
});

var myDevConfig = Object.create(webpackConfig);

var devCompiler = webpack(myDevConfig);

//引用webpack对js进行操作
gulp.task("hot", ['fileinclude'], function(callback) {
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('default', ['build','img']);
gulp.task('dev', ['fileinclude','hot', 'open','img']);