export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],

  auth: {
    baseURL: process.env.AUTH_ORIGIN || 'http://localhost:3000',
    provider: {
      type: 'authjs'
    }
  },

  compatibilityDate: '2024-01-01'
})