;(function (app, NoteLocalStorage) {
  'use strict'
  const repository = {}

  repository.save = NoteLocalStorage.save
  repository.getAll = NoteLocalStorage.getAll

  app.NoteRepository = repository
})(window.app, window.app.NoteLocalStorage)
