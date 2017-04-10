'use strict'

const db = require('../db')
const notes = {}

notes.getAll = () => {
  return new Promise((resolve, reject) => {
    const _query = {}

    db.find(_query, (err, docs) => {
      if (err) return reject(err)
      return resolve(docs)
    })
  })
}

notes.save = (notes) => {
  return new Promise((resolve, reject) => {
    db.insert(notes, (err, result) => {
      if (err) return reject(err)
      return resolve(result)
    })
  })
}

module.exports = notes
