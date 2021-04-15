const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./api/routes.js')


const app = express()
const PORT = 5000


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/', router)

app.listen(PORT)
