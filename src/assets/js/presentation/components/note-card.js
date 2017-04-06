;(function (app) {
  'use strict'

  function createArticle () {
    const noteNode = document.createElement('article')
    noteNode.classList = 'note depth depth--floatable'
    return noteNode
  }

  function createTitle (note) {
    const noteTitle = document.createElement('h1')
    noteTitle.classList = ['note-title']
    noteTitle.appendChild(document.createTextNode(note.title))
    return noteTitle
  }

  function createContent (note) {
    const noteContent = document.createElement('div')
    noteContent.classList = ['note-content']

    const noteText = document.createElement('p')
    noteText.innerHTML = note.content.replace(/\n/g, '<br>')
    noteContent.appendChild(noteText)

    return noteContent
  }

  function createActionContainer (note) {
    const noteActions = document.createElement('div')
    noteActions.classList = 'note-actions note-actions--end'

    return noteActions
  }

  function createEditButton (note) {
    const editButton = document.createElement('button')
    editButton.classList = 'note-action btn-icon ic-edit'
    editButton.appendChild(document.createTextNode('Edit'))

    return editButton
  }

  function createDeleteButton (note) {
    const deleteButton = document.createElement('button')
    deleteButton.classList = 'note-action btn-icon ic-delete'
    deleteButton.appendChild(document.createTextNode('Delete'))

    return deleteButton
  }

  class NoteCard {
    constructor (note) {
      this._note = note
      const article = createArticle(note)
      const title = createTitle(note)
      const content = createContent(note)
      const actionContainer = createActionContainer(note)
      const editButton = createEditButton(note)
      const deleteButton = createDeleteButton(note)

      editButton.addEventListener('click', () => this._onEditNote())
      deleteButton.addEventListener('click', () => this._onDeleteNote())

      actionContainer.appendChild(editButton)
      actionContainer.appendChild(deleteButton)

      article.appendChild(title)
      article.appendChild(content)
      article.appendChild(actionContainer)
      this._article = article
    }

    render () {
      return this._article
    }

    _onEditNote () {
      if (this._onEditNoteListener) this._onEditNoteListener(this._note)
    }

    _onDeleteNote () {
      if (this._onDeleteNoteListener) this._onDeleteNoteListener(this._note)
    }

    onEditNoteListener (onEditNoteListener) {
      this._onEditNoteListener = onEditNoteListener
    }

    onDeleteNoteListener (onDeleteNoteListener) {
      this._onDeleteNoteListener = onDeleteNoteListener
    }
  }

  app.components.NoteCard = NoteCard
})(window.app)
