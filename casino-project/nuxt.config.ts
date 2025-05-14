export default defineNuxtConfig({
  // Исправляем конфигурацию совместимости
  nitro: {
    compatibilityDate: '2025-05-14'
  },
  // Упрощаем список модулей
  modules: [
   '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true }
})