var gulp = require('gulp');
var concat = require('gulp-concat');
var toc = require('gulp-markdown-toc');
 
gulp.task('build', function() {
  return gulp.src([
	  './source/index.md',
	  './source/1-general-guidelines.md',
	  './source/2-terminology.md', 
	  './source/3-punctuations-text-conventions.md',
	  './source/numerals.md',
	  './source/4-units-measurements.md',
	  './source/5-general-spelling-guidelines.md',
	  './source/6-basic-quality-parameters.md'
  ])
    .pipe(concat('guide.md'))
	.pipe(toc())
    .pipe(gulp.dest('./dist/'));
});
