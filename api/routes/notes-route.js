'use strict'

const express = require('express')
const ctrl = require('../controllers/notes-controller')
const router = express.Router()

router.get('/notes', ctrl.getAll)
router.post('/notes', ctrl.save)

module.exports = router
