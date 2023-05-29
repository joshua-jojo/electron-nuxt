export default defineNuxtConfig({
  modules: ['nuxt-electron'],
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