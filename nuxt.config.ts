import { pwa } from './app/config/pwa';
import { appDescription, appName } from './app/constants/index';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui', 
    '@nuxt/eslint', 
    '@nuxt/test-utils', 
    '@vite-pwa/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: appName,
      meta: [
        {
          name: 'description',
          content: appDescription,
        },
      ],
      htmlAttrs: {
        lang: 'ru-RU',
      },
    },
  },

  pwa,

  ssr: false,
});
