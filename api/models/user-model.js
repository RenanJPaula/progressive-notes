'use strict'

const db = require('../db')
const notes = {}

notes.save = (user) => {
  return new Promise((resolve, reject) => {
    if (user._id) {
      db.users.update(user, (err, result) => {
        if (err) return reject(err)
        return resolve(result._id)
      })
    } else {
      db.users.insert(user, (err, result) => {
        if (err) return reject(err)
        return resolve(result._id)
      })
    }
  })
}

module.exports = notes
