const gulp = require('gulp');
const fs = require('fs');

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

const themestyles = function() {
  const paths = fs.readdirSync('./themes')
    .map(getThemeStyles);
  paths.push(styles);
  return gulp.src(paths)
    .pipe(gulp.dest('build'));
};

gulp.task('default', themestyles);


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

