var path = require('path');
var gulp = require('gulp');

// Include all plugins dependencies from package.json
var plugins = require('gulp-load-plugins')({
  replaceString: /^gulp(-|\.)/,
  scope: ['devDependencies'],
  lazy: false
});

//Détail des plugins utilisés :
/*
  gulp-autoprefixer       --> préfix navigateurs automatique dans le css généré
  gulp-cache              --> utilisé pour ne pas réoptimiser les images à chaque enregistrement de fichier
  gulp-concat             --> concaténation de fichiers (JS)
  gulp-imagemin           --> optimisation des images
  gulp-cssnano            --> minification des fichiers CSS
  gulp-replace-image-src  --> remplace la source des images dans le HTML généré
  gulp-sass               --> préprocesseur CSS
  gulp-strip-debug        --> habillage des erreurs JS dans la console
  gulp-uglify             --> minification des fichiers JS
  gulp-useref             --> remplacement des références à des scripts ou CSS non optimisés dans le HTML généré
  gulp-combine-mq         --> combine toutes les media query correspondantes en une seule
  gulp-real-favicon       --> générateur de favicon, voir https://realfavicongenerator.net/
  gulp-svg-symbols        --> créé un sprite à partir de toutes les sources SVG
*/

// Plugins spécifiques
plugins.browserSync = require('browser-sync').create(); // live reload server instance
plugins.gulpIf = require('gulp-if');
plugins.runSequence = require('run-sequence'); //pour lancer les tâches les unes après les autres (et pas en simultanément)
plugins.del = require('del'); //suppression de fichiers, pour générer la dist
plugins.merge = require('merge-stream');
plugins.globule = require('globule');
plugins.stylelint = require('gulp-stylelint');
plugins.sc5styleguide = require('sc5-styleguide');

var params = require(path.join(__dirname, 'params.json'));
params.absolutePath = __dirname;
var gulpTasks = "./gulp-tasks/";

//gulp.task('sass', require(gulpTasks + 'sass')(gulp, plugins, params));

gulp.task('sass:dev', require(gulpTasks + 'sass-dev')(gulp, plugins, params));
gulp.task('sass:prod', require(gulpTasks + 'sass-prod')(gulp, plugins, params));
gulp.task('css:clean', require(gulpTasks + 'css-clean')(gulp, plugins, params));
gulp.task('sass', function(callback){
  plugins.runSequence(
    'sass:dev',
    'sass:prod',
    callback
  );
});

gulp.task('scripts', require(gulpTasks + 'scripts')(gulp, plugins, params));

gulp.task('replaceImgSrc', require(gulpTasks + 'replaceImgSrc')(gulp, plugins, params));

gulp.task('images', require(gulpTasks + 'images')(gulp, plugins, params));

gulp.task('fonts', require(gulpTasks + 'fonts')(gulp, plugins, params));

gulp.task('htmls', require(gulpTasks + 'htmls')(gulp, plugins, params));

gulp.task('clean', require(gulpTasks + 'clean')(gulp, plugins, params));

gulp.task('cleanDevCSS', require(gulpTasks + 'cleanDevCSS')(gulp, plugins, params));

gulp.task('useref', require(gulpTasks + 'useref')(gulp, plugins, params));    // remplace les appels des fichiers non optimisés dans les fichiers html de dist

gulp.task('generate-favicon', require(gulpTasks + 'favicons')(gulp, plugins, params));

gulp.task('icons', require(gulpTasks + 'svg-icons')(gulp, plugins, params));

gulp.task('eslint', require(gulpTasks + 'eslint')(gulp, plugins, params));    // utiliser DocBlockr pour Sublime text pour générer automatiquement les commentaires

gulp.task('styleguide:generate', require(gulpTasks + 'styleguide-generate')(gulp, plugins, params));
gulp.task('styleguide:applystyles', require(gulpTasks + 'styleguide-applystyles')(gulp, plugins, params));
gulp.task('styleguide', function (callback) {
  plugins.runSequence(['sass', 'scripts'], 'styleguide:applystyles', 'styleguide:generate', callback);
});

gulp.task('browserSync', function() {
  plugins.browserSync.init({
    server: {
      baseDir: './dev'
    },
  })
});


gulp.task('watch', ['browserSync', 'scripts', 'sass'], function(){
  gulp.watch('dev/scss/**/*.scss', ['sass']); 
  gulp.watch('dev/*.html', plugins.browserSync.reload); 
  gulp.watch('dev/js/**/*.js', plugins.browserSync.reload);
});

gulp.task('build', function (callback) {
  plugins.runSequence(
    ['clean'],
    ['sass'], 
    ['scripts'],
    ['css:clean'], 
    ['images'],
    ['fonts'],
    ['useref'],
    'generate-favicon',
    'icons',
    callback
  )
});

gulp.task('default', ['watch']);
