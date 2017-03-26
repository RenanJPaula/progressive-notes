'use strict'

const express = require('express')
const app = express()

app.use('/', express.static('src'))

app.listen(4000, () => console.log('http://localhost:4000'))
