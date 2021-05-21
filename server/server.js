const axios = require('axios')
const compression = require('compression')
const express = require('express')
const bodyParser = require('body-parser')
const serveStatic = require('serve-static')
const path = require('path')
const routesForApi = require('./api/routes.js')


const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'
const isProd = !isDev && !isTest
const port = isDev ? 8081 : isTest ? 8083 : process.env.PORT

const app = express()
app.use(compression())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
// serve the static files built by vuejs
app.use('/', serveStatic(path.join(__dirname, '..', 'dist')))

routesForApi(app)
// Allow CORS in development & test
if (!isProd) {
  const cors = require('cors')
  app.use(cors())
}

// The actual server
const server = app.listen(port, () => {
  console.log('App is running on port ' + port)
})
