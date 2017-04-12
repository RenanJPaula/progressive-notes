'use strict'

const express = require('express')
const compression = require('compression')
const app = express()
const env = require('../env')

app.disable('x-powered-by')
app.use(compression())

app.use('/', express.static('build'))

app.listen(env.port, () => console.log(`http://localhost:${env.port}`))
