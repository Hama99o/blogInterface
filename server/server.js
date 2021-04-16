const axios = require('axios')
const express = require('express')
const router = require('./api/routes.js')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/', router)

app.listen(PORT)
