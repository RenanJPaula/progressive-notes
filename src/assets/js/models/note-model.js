;(function (app) {
  'use strict'

  class Note {
    constructor (attrs) {
      if (!attrs) attrs = {}

      this.title = attrs.title || ''
      this.content = attrs.content || ''
    }
  }

  app.models.Note = Note
}(window.app))
