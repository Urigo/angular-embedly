/**
 * Created by moran on 25/06/14.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src([
        'src/app.js',
        'src/services/embedlyService.js',
        'src/controllers/emEmbedCtrl.js',
        'src/directives/emEmbed.js'
    ])
        .pipe(concat('angular-embedly.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('em-minified'))
    
    gulp.src([
        'src/app.js',
        'src/services/embedlyService.js',
        'src/controllers/emEmbedCtrl.js',
        'src/directives/emEmbed.js'
    ])
        .pipe(concat('angular-embedly.js'))
        .pipe(gulp.dest(''))
});
