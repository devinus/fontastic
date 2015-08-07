import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import filter from 'gulp-filter';
import gulp from 'gulp';
import rename from 'gulp-rename';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import watchify from 'watchify';

import { log } from 'gulp-util';

import { name as packageName } from './package.json';

function compile(bundle) {
  return bundle
    .transform(babelify.configure({ loose: 'all' }))
    .bundle()
    .pipe(source(`${packageName}.js`))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(filter('*.js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}

function build(watch) {
  const bundle = browserify('./src/index.js', {
    debug: true,
    standalone: packageName
  });

  if (watch) {
    watchify(bundle).on('update', function() {
      log('Rebuilding...');
      compile(bundle);
    });
  }

  return compile(bundle);
}

gulp.task('default', ['build']);

gulp.task('build', ['lint'], function() {
  return build();
});

gulp.task('watch', function() {
  return build(true);
});

gulp.task('lint', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});
