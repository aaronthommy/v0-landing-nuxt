// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  
  plugins: [
    '~/plugins/i18n.js'
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia', 'swiper', 'vue-i18n']
    },
    build: {
      minify: false, // Im Entwicklungsmodus nicht minifizieren
      sourcemap: false
    },
    server: {
      hmr: {
        clientPort: 24678,
        host: '0.0.0.0'
      },
      host: '0.0.0.0',
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
        minify: false
      }
    }
  },
  runtimeConfig: {
    // SMTP
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpSecure: process.env.SMTP_SECURE,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    contactTo: process.env.CONTACT_TO,

    // reCAPTCHA
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
    public: { recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY }
  }
})