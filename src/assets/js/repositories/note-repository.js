;(function (app, NoteLocalStorage) {
  'use strict'
  const repository = {}

  repository.save = NoteLocalStorage.save
  repository.delete = NoteLocalStorage.delete
  repository.getAll = NoteLocalStorage.getAll

  app.NoteRepository = repository
})(window.app, window.app.NoteLocalStorage)
