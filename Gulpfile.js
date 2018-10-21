var gulp = require('gulp');
var concat = require('gulp-concat');
var toc = require('gulp-markdown-toc');
var markdownPdf = require('gulp-markdown-pdf');
 
gulp.task('build', function() {
  return gulp.src([
	  './source/index.md',
	  './source/general-guidelines.md',
	  './source/spellings.md', 
	  './source/punctuations-text-conventions.md',
	  './source/localisation-l10n.md',
	  './source/numerals.md',
	  './source/units-measurements.md',
	  './source/basic-quality-parameters.md'
  ])
    .pipe(concat('guide.md'))
	.pipe(toc())
    .pipe(gulp.dest('./dist/'))
	.pipe(markdownPdf())
    .pipe(gulp.dest('./dist/'))
});
