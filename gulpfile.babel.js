import babel from 'gulp-babel';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import rename from 'gulp-rename';
import rimraf from 'gulp-rimraf';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import merge from 'merge-stream';
import copy from 'gulp-copy';
import extractor from 'gulp-extract-sourcemap';
import path from 'path';
import filter from 'gulp-filter';
import exorcist from 'exorcist';
import transform from 'vinyl-transform';

import { name as packageName } from './package.json';

gulp.task('default', ['lint'], function() {
  return browserify('./src/index.js', { debug: true, standalone: packageName })
    .transform(babelify.configure({ loose: 'all' }))
    .bundle()
    .pipe(exorcist(`dist/${packageName}.js.map`))
    .pipe(source(`${packageName}.js`))
    .pipe(gulp.dest('dist'))
    .pipe(filter('*.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});
