export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/main.css',
  ]
})