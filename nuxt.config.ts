// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'DescriptionBuilder',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      script: [],
      link: [],
    },
  },

  css: [    
    '@/assets/css/reset.css',
  ],

  imports: {
    autoImport: true,
  },

  srcDir: 'src/',

  dir: {
    pages: 'views',
  },

  alias: {
    '~': '/src/',
  },
})
