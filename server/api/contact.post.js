import nodemailer from 'nodemailer'
import { defineEventHandler, readBody, createError } from 'h3'   // falls nicht schon importiert

export default defineEventHandler(async (event) => {
  /* ---------- Request-Body ---------- */
  const body = await readBody(event)
  const { name, email, subject, message, recaptchaToken } = body

  /* ---------- Server-Config ---------- */
  const {
    recaptchaSecretKey,
    smtpHost, smtpPort, smtpSecure,
    smtpUser, smtpPass, contactTo
  } = useRuntimeConfig(event)

  /* ---------- reCAPTCHA-Verify ---------- */
  const verify = await $fetch('https://www.google.com/recaptcha/api/siteverify', {   // :contentReference[oaicite:1]{index=1}
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: recaptchaSecretKey,
      response: recaptchaToken
    }).toString()
  })

  if (!verify.success || verify.action !== 'contact_form' || verify.score < 0.5) {
    throw createError({ statusCode: 400, statusMessage: 'reCAPTCHA fehlgeschlagen' })
  }

  /* ---------- Pflichtfelder prüfen ---------- */
  if (![name, email, subject, message].every(Boolean)) {
    throw createError({ statusCode: 400, statusMessage: 'Pflichtfelder fehlen' })
  }

  /* ---------- Nodemailer ---------- */
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: smtpSecure === 'true',
    auth: { user: smtpUser, pass: smtpPass },
    tls: { rejectUnauthorized: false }          // nur lokal
  })

  await transporter.sendMail({
    from: `"Webseite Kontakt" <${smtpUser}>`,
    replyTo: email,
    to:    contactTo,
    subject: `[Kontakt] ${subject}`,
    text: message
  })

  return { message: 'Danke, Nachricht ist unterwegs 🚀' }
})
