import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import browserify from 'browserify';
// import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import { name as packageName } from './package.json';

gulp.task('default', ['lint'], function() {
  return browserify('./src/index.js', { debug: true })
    .transform(babelify.configure({ loose: 'all' }))
    .bundle()
    .pipe(source(`${packageName}.js`))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});
