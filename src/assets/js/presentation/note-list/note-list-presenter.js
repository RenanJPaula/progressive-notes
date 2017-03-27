;(function (app, NoteRepository) {
  'use strict'

  class Presenter {
    constructor (view) {
      this.view = view
    }

    getAll () {
      return NoteRepository.getAll()
    }

    save (note) {
      NoteRepository
        .save(note)
        .then(NoteRepository.getAll)
        .then(this.view.updateNoteList)
    }

    delete (note) {
      NoteRepository
        .delete(note)
        .then(NoteRepository.getAll)
        .then(this.view.updateNoteList)
    }
  }

  app.NoteListPresenter = Presenter
})(window.app, window.app.NoteRepository)
