const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync=require('browser-sync').create()

function style(){
    return(
        gulp.src("./App/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./App/css"))
        .pipe(browserSync.stream())
    )
}
function watch(){
    browserSync.init({
        server:{
            baseDir:"App"
        }
    })
    gulp.watch('./app/scss/**/*.scss',style)
    gulp.watch('./app/**/*.html').on("change",browserSync.reload)
    gulp.watch('./app/**/*.js').on("change",browserSync.reload)
}
exports.style=style
exports.watch=watch