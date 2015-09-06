var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var $ = require('gulp-load-plugins')();

// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
//
var runSequence = require('run-sequence');
var minifyHTML = require('gulp-minify-html');
var config = require('./config');


gulp.task('default', ['mytask1'], function() {
    console.log('default task!');
});

gulp.task('mytask1', ['mytask2'], function() {
    console.log('my task1');

})

gulp.task('mytask2', function() {
    console.log('my task2');

});

gulp.task('output1', function() {
    gulp.src('./assets/vendor/bootstrap/**/*.js')
        .pipe(gulp.dest('output1'));
});

gulp.task('output2', function() {
    gulp.src('./assets/vendor/bootstrap/**/*.js', {
            base: 'assets/vendor'
        })
        .pipe(gulp.dest('output2'));
});

gulp.task('output3', function() {
    gulp.src(['./assets/vendor/**/*.js',
            './assets/vendor/**/*.css'
        ], {
            base: 'assets/vendor'
        })
        .pipe(gulp.dest('output3'));
});

gulp.task('output4', function() {
    gulp.src(['./assets/vendor/angular/angular*.js',
            './assets/vendor/angular-animate/angular-*.js'
        ])
        .pipe(gulp.dest('output4'));
});


gulp.task('clean', function(cb) {

    //del(['output2/bootstrap/**', '!output2/bootstrap']);

    del(['output2/bootstrap/**'])
        .then(function(paths) {
            console.log('Deleted files/folders:\n' + paths.join('\n'));
        })
        .then(cb);

});

gulp.task('output2clean', ['clean'], function() {
    gulp.src('./assets/vendor/bootstrap/**/*.js', {
            base: 'assets/vendor'
        })
        .pipe(gulp.dest('output2'));

    console.log('Output2-OK');
});

gulp.task('output2', function() {
    gulp.src('./assets/vendor/bootstrap/**/*.js', {
            base: 'assets/vendor'
        })
        .pipe(gulp.dest('output2'));

    console.log('Output2-OK');
});

gulp.task('watch', function() {
    gulp.watch('./assets/vendor/**/*.js', ['output2clean'])
        .on('change', function(e) {
            console.log('File: ' + e.path);
        });
});

gulp.task('concat-app', function() {
    gulp.src(config.appPath + '/**/*.module.js')
        .pipe($.concat('app.modules.js'))
        .pipe(gulp.dest('assets/build'))
        .pipe($.uglify({
            mangle: false
        }))
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('assets/build'));

    gulp.src([config.appPath + '/**/*.js', '!app/**/*.module.js'])
        .pipe($.concat('app.bundles.js'))
        .pipe(gulp.dest('assets/build'))
        .pipe($.uglify({
            mangle: false
        }))
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('assets/build'));
});

gulp.task('default02', function() {
    console.log('Successfully default task!');
});

gulp.task('cleansafe', function(cb) {
    // content
    gulp.src(['assets/build'])
        .pipe(vinylPaths(del))
        .on('end', function() {
            console.log('clean done!');
            cb();
        })
        .on('error', function(err) {
            console.log(err);
            cb();
        })
        .resume();
});

gulp.task('concat-vendor', function() {
    gulp.src('assets/vendor/angular/**/*.js')
        .pipe($.concat('app.vendor.js'))
        .pipe(gulp.dest('assets/build'))
        .pipe($.uglify({
            mangle: false
        }))
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('assets/build'));

});

gulp.task('mini-html', function() {
    // content
    var opts = {
        conditionals: true,
        spare: true
    };

    gulp.src('./*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./assets/build/'));
});

gulp.task('build01', function() {
    runSequence('cleansafe', ['concat-app', 'mini-html'], 'default02', function() {
        console.log('build01 is successed');
    });
});
