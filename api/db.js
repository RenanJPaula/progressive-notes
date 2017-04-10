'use strict'

const Datastore = require('nedb')
const db = {}

db.users = new Datastore()
db.notes = new Datastore()

module.exports = db
