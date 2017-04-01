;(function (app, Note, localStorage, JSON) {
  'use strict'
  const STORAGE_KEY = 'notes'
  const _notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  const storage = {}

  storage.save = (note) => {
    if (_notes.indexOf(note) === -1) {
      _notes.push(note)
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_notes))
    return Promise.resolve(note)
  }

  storage.delete = (note) => {
    const index = _notes.indexOf(note)
    if (index > -1) {
      _notes.splice(index, 1)
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_notes))
    return Promise.resolve()
  }

  storage.getAll = () => Promise.resolve(_notes)

  app.repositories.NoteLocalStorage = storage
})(window.app,
   window.app.models.Note,
   window.localStorage,
   window.JSON)
