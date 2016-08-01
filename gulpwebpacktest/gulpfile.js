'use strict';
var gulp=require('gulp');
//js文件处理
var concat =  require('gulp-concat'),//合并
    uglify = require('gulp-uglify');//压缩
//压缩图片
var imagemin = require('gulp-imagemin');
//js脚本合并，压缩，重命名，拷贝到生产目录中
gulp.task('concatScript', function() {
    return gulp.src(['./app/script/*.js'])//原文件
        .pipe(concat('all.js'))//合并后的文件
        .pipe(uglify())//在压缩合并后的js文件
        .pipe(rename('all.min.js'))//会将all.js重命名为all.min.js
        .pipe(gulp.dest('dist/script'));//把合并后的文件，拷贝到生成环境中
});
