require('dotenv').config();
import NuxtConfiguration from '@nuxt/config';

const config: NuxtConfiguration = {
  build: {
    extractCSS: true
  },
  head: {
    title: 'nuxt-typescript-function-api-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A static site powered by Nuxt.js'
      }
    ]
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    proxy: true
  },
  proxy: {
    '/data': 'http://localhost:5005',
    '/graphql': 'http://localhost:5005',
    debug: true
  },
  plugins: ['@/plugins/functionApi.ts'],
  devModules: ['@nuxtjs/tailwindcss'],
  server: {
    port: process.env.NUXT_PORT || 5001,
    host: process.env.NUXT_HOST || '0.0.0.0'
  },
  router: {
    middleware: 'cookie'
  },
  srcDir: 'src'
};

export default config;
