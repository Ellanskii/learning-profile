import { pwa } from './app/config/pwa';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui', 
    '@nuxt/eslint', 
    '@nuxt/test-utils', 
    '@vite-pwa/nuxt',
  ],
  pwa,
  ssr: false,
});
