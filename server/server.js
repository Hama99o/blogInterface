const axios = require('axios')
const express = require('express')
const router = require('./api/routes.js')
const bodyParser = require('body-parser')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
const PORT = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// serve the static files built by vuejs
app.use('/', serveStatic(path.join(__dirname, '..', 'dist')))

app.use('/', router)

app.listen(PORT)

console.log(`Server running on port ${PORT}`)
