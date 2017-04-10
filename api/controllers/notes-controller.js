'use strict'

const Notes = require('../models/note-model')
const ctrl = {}

ctrl.getAll = (req, res, next) => {
  Notes.getAll()
       .then(notes => res.json(notes))
       .catch(err => res.status(400).json(err))
}

ctrl.save = (req, res, next) => {
  Notes.save(req.body)
       .then(notes => res.json(notes))
       .catch(err => res.status(400).json(err))
}

module.exports = ctrl
