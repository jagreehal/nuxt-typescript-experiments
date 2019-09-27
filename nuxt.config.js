const config = {
  build: {
    extractCSS: true,
    extend(config) {
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      });
    }
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
  modules: ['@nuxtjs/axios', '@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  axios: {
    proxy: true
  },
  proxy: {
    '/data': 'http://localhost:5005',
    '/graphql': 'http://localhost:5005',
    debug: true
  },
  plugins: ['@/plugins/composition-api', '@/plugins/click-outside'],
  server: {
    port: process.env.NUXT_PORT || 5001,
    host: process.env.NUXT_HOST || '0.0.0.0'
  },

  srcDir: 'src/'
};

export default config;
