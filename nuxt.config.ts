import Aura from '@primeuix/themes/aura';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  modules: ['@primevue/nuxt-module', '@nuxtjs/i18n'],

  i18n: {
    defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', dir: 'ltr', name: 'English' },
      { code: 'ur', dir: 'rtl', name: 'اردو' },
    ],
    debug: true,
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primevue',
            order: 'theme, base, primevue',
          },
        },
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],
});
