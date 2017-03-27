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

  app.NoteLocalStorage = storage
})(window.app)
