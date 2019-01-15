const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/build/js')
   .sass('resources/sass/app.scss', 'public/build/css');

   mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/Ionicons/css/ionicons.min.css',
    'node_modules/admin-lte/dist/css/AdminLTE.css',
    'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    'node_modules/morris.js/morris.css',
    'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
    'node_modules/bootstrap-daterangepicker/daterangepicker.css',
    'node_modules/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
    'node_modules/jvectormap/jquery-jvectormap.css',
], 'public/build/css/vendor.css');

mix.scripts([
    'node_modules/treantjs/vendor/raphael.js',
    'node_modules/treantjs/Treant.js',
    'node_modules/admin-lte/dist/js/demo.js',
], 'public/build/js/vendor.js');

mix.styles(['public/build/css/vendor.css', 'public/build/css/app.css'], 'public/css/app.css');
mix.scripts(['public/build/js/app.js', 'public/build/js/vendor.js'], 'public/js/app.js');
