const axios = require('axios')
const express = require('express')
const router = require('./api/routes.js')
const bodyParser = require('body-parser')
const serveStatic = require('serve-static')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'
const isProd = !isDev && !isTest
const port = isDev ? 8081 : isTest ? 8083 : process.env.PORT

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// serve the static files built by vuejs
app.use('/', serveStatic(path.join(__dirname, '..', 'dist')))

app.use('/', router)

// The actual server
const server = app.listen(port, () => {
  console.log('App is running on port ' + port)
})
