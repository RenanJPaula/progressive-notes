;(function (app, Note) {
  'use strict'
  const storage = {}

  // mock
  const _notes = [new Note({
    title: 'Fake note!',
    content: 'Its just a test!'
  })]

  storage.save = (note) => {
    if (_notes.indexOf(note) === -1) {
      _notes.push(note)
    }
    return Promise.resolve(note)
  }

  storage.delete = (note) => {
    const index = _notes.indexOf(note)
    if (index > -1) {
      _notes.splice(index, 1)
    }

    return Promise.resolve()
  }

  storage.getAll = () => Promise.resolve(_notes)

  app.repositories.NoteLocalStorage = storage
})(window.app, window.app.models.Note)
