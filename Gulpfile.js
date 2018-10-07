var gulp = require('gulp');
var concat = require('gulp-concat');
var toc = require('gulp-markdown-toc');
var markdownPdf = require('gulp-markdown-pdf');
 
gulp.task('build', function() {
  return gulp.src([
	  './source/index.md',
	  './source/general-guidelines.md',
	  './source/2-terminology.md', 
	  './source/3-punctuations-text-conventions.md',
	  './source/numerals.md',
	  './source/units-measurements.md',
	  './source/5-general-spelling-guidelines.md',
	  './source/6-basic-quality-parameters.md'
  ])
    .pipe(concat('guide.md'))
	.pipe(toc())
    .pipe(gulp.dest('./dist/'))
	.pipe(markdownPdf())
    .pipe(gulp.dest('./dist/'))
});
