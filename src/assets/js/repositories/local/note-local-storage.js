;(function (app, NoteLocalStorage) {
  'use strict'
  const storage = {}

  // mock
  const _notes = [new app.Note({
    title: 'Fake note!',
    content: 'Its just a test!'
  })]

  storage.save = (note) => {
    _notes.push(note)
  }

  storage.getAll = () => Promise.resolve(_notes)

  app.NoteLocalStorage = storage
})(window.app)
