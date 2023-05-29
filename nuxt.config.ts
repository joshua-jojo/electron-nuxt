export default defineNuxtConfig({
  modules: [
    'nuxt-electron',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/preload.ts',
      },
    ],
  },
})