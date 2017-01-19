var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// 静态服务器
gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index:"./index1.html"
        }
    });
    gulp.watch(["*.html","js/*.js","css/*.css"]).on('change',reload);
});

// 代理
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:3000"
    });
});