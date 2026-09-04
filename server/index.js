// Production server: serves the Vite build with SPA fallback. Railway runs `npm start`.
import express from 'express'
import compression from 'compression'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, '..', 'dist')
const port = Number(process.env.PORT) || 3000

const app = express()
app.disable('x-powered-by')
app.use(compression())

app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  next()
})

app.get('/healthz', (_req, res) => res.json({ ok: true }))

// Hashed assets can be cached forever; HTML must not be.
app.use(
  '/assets',
  express.static(path.join(dist, 'assets'), { immutable: true, maxAge: '1y' }),
)
app.use(express.static(dist, { maxAge: '1h', index: false }))

app.get('*', (_req, res) => {
  res.setHeader('Cache-Control', 'no-cache')
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(port, () => {
  console.log(`bespoke-diamonds listening on :${port}`)
})
