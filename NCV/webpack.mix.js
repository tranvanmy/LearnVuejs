const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'scss@': path.resolve('resources/sass'),
        '@': path.resolve('resources/js'),
        'public' : path.resolve('public'),
      },
    },
})

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
    'node_modules/admin-lte/bower_components/Ionicons/css/ionicons.min.css',
    'node_modules/admin-lte/dist/css/AdminLTE.css',
    'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
], 'public/build/css/vendor.css');

mix.scripts([
    'node_modules/admin-lte/dist/js/demo.js'
], 'public/build/js/vendor.js');

mix.styles(['public/build/css/vendor.css', 'public/build/css/app.css'], 'public/css/app.css');
mix.scripts(['public/build/js/app.js', 'public/build/js/vendor.js'], 'public/js/app.js');

mix.disableNotifications();
