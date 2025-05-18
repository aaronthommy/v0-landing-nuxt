import { VueReCaptcha } from 'vue-recaptcha-v3'
export default defineNuxtPlugin(nuxtApp => {
  const cfg = useRuntimeConfig()
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: cfg.public.recaptchaSiteKey,
    loaderOptions: {
      useRecaptchaNet: true,     // schneller CDN
      autoHideBadge: false       // Badge sichtbar lassen
    }
  })
})