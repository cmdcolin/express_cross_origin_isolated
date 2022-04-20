const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const app = express()
const port = process.argv[3] || 4000

app.use(cors({}))

// https://www.npmjs.com/package/serve-static
app.use(
  serveStatic(process.argv[2] || 'public', {
    index: ['index.html'],
    setHeaders: setHeaders,
  }),
)

// Set header to force download
function setHeaders(res) {
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp')
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
