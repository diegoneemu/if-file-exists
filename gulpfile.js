const gulp = require('gulp');
const folders = require('gulp-folders');

const styles = 'styles/*.scss';

const themes = {
    path: 'app/themes',
    styles: 'app/themes/**/styles/*.scss',
    deviceStyles: 'app/themes/**/styles/**/*.scss',
    images: ['app/themes/**/images/*.gif', 'app/themes/**/images/*.png', 'app/themes/**/images/*.jpg']
};

function getThemeStyles(store){
    console.log('getThemeStyles: ', store)
    var theme = themes.styles.replace('**', store);
    console.log("theme: ", theme);
    return theme;
}

gulp.task('theme-styles', folders('./themes/', function(store){
    console.log('task: ', store);
    return gulp.src([
        getThemeStyles(store),
        styles
    ])
    .pipe(gulp.dest('build'));
}))

gulp.task('default', function(){
    gulp.start('theme-styles');
})

/**
 * gulp.task(
    'theme-styles',
    ['bower'],
    folders(themes.path, function(store) {
        if (existir brands) {
            folders(themes.path + '/brands', function(brand) {
                return gulp
            .src([getThemeStyles(store), styles])
            .pipe(concat('instore.css'))
            .pipe(sass())
            .on('error', showError)
            .pipe(gulp.dest('./build/themes/' + store + 'brands' + brand));
        }

        return gulp
            .src([getThemeStyles(store), styles])
            .pipe(concat('instore.css'))
            .pipe(sass())
            .on('error', showError)
            .pipe(gulp.dest('./build/themes/' + store));
    })
);
 */