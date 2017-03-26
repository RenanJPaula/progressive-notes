;(function (app) {
  'use strict'

  class Note {
    constructor (attrs) {
      if (attrs) {
        this.title = attrs.title || null
        this.content = attrs.content || null
      }
    }
  }

  app.Note = Note
}(window.app))
