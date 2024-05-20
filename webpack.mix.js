const mix = require('laravel-mix');
const webpackConfig = require('./webpack.config');

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

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .webpackConfig(webpackConfig)
    .alias({
      '@Pages':'resources/js/Pages',
      '@Admin':'resources/js/Pages/Admin'
    })
    .sass('resources/sass/app.scss', 'public/css');

if (mix.inProduction()) {
  mix.version();
}
