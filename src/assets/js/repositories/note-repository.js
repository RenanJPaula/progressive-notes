;(function (app, NoteLocalStorage) {
  'use strict'
  const repository = {}

  repository.save = NoteLocalStorage.save
  repository.delete = NoteLocalStorage.delete
  repository.getAll = NoteLocalStorage.getAll

  app.repositories.NoteRepository = repository
})(window.app, window.app.repositories.NoteLocalStorage)
