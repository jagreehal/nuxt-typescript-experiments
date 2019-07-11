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

  plugins: ['@/plugins/functionApi.ts'],
  devModules: ['@nuxtjs/tailwindcss'],
  server: {
    port: process.env.NUXT_PORT || 5001,
    host: process.env.NUXT_HOST || '0.0.0.0'
  },
  srcDir: 'src'
};

export default config;
