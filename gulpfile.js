var gulp = require('gulp');
var browserSync = require('browser-sync').create();

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
     //слежу за файлами watch
        gulp.watch("./index.html").on('change', browserSync.reload);
    }

 gulp.task("watch",watch);