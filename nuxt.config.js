const isDev = require('isdev');
const cfg = require('config');
const path = require('path');

module.exports = {
  srcDir: cfg.get('paths.app.client'),
  buildDir: cfg.get('paths.dist.client'),
  rootDir: './',
  head: {
    title: 'Academy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Top notch learning platform' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: 'https://js.stripe.com/v3/'
    }]
  },
  css: [
    'normalize.css',
    '@/assets/css/main.css'
  ],
  loading: { color: '#722BC2' },
  build: {
    vendor: [],
    extractCSS: {
      allChunks: true
    },
    postcss: {
      plugins: {
        'postcss-partial-import': {},
        'postcss-crip': {},
        'postcss-nested-props': {},
        'postcss-map': {
          basePath: path.resolve(__dirname, 'styleVars'),
          maps: [
            'fonts.yml',
            'colors.yml'
          ]
        },
        'postcss-mixins': {},
        'postcss-advanced-variables': {},
        'postcss-short': {},
        'postcss-cssnext': {
          browsers: [
            'last 5 versions',
            'Opera 12.1',
            'safari >= 8',
            'ie >= 10',
            'ff >= 20',
            'ios 6',
            'android 4',
            'ie >= 9'
          ],
          features: {
            nesting: false
          }
        },
        'postcss-nested': {},
        'postcss-ref': {},
        'postcss-property-lookup': {},
        'postcss-utilities': {},
        'rucksack-css': {},
        'postcss-extend': {},
        'postcss-merge-rules': {},
        'css-mqpacker': {}
      }
    }
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/workbox',
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: cfg.get('baseUrl')
  },
  manifest: {
    name: 'Academy',
    description: 'One of the best learning website',
    theme_color: '#000'
  },
  plugins: ['~/plugins/axios']
};
