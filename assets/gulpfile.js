const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function scss () {
    return src('src/n-plate.scss')
        .pipe(sass())
        .pipe(dest('dest'));
}

function js () {
    return src('src/n-plate.js')
        .pipe(dest('dest'));
}

exports.default = series(scss, js);