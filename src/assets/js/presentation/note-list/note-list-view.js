;(function (NoteListPresenter, Note) {
  'use strict'

  const view = {}
  const presenter = new NoteListPresenter(view)

  const mNoteList = document.getElementById('noteList')
  const btnNewNote = document.getElementById('btnNewNote')

  view.updateNoteList = (notes) => {
    mNoteList.innerHTML = ''
    notes.map(renderNoteCard)
         .forEach(noteHtmlNode => mNoteList.appendChild(noteHtmlNode))
  }

  function init () {
    initNoteList()
    addOnNewNoteBtnClick()
  }

  function initNoteList () {
    presenter.getAll().then(view.updateNoteList)
  }

  function addOnNewNoteBtnClick () {
    btnNewNote.addEventListener('click', () => {
      presenter.save(new Note({
        title: 'Teste',
        content: 'This is a content test of Note'
      }))
    })
  }

  function onEditNote (note) {
    presenter.save(note)
  }

  function onDeleteNote (note) {
    presenter.delete(note)
  }

  function renderNoteCard (note) {
    const noteNode = document.createElement('article')
    noteNode.classList = 'note depth depth--floatable'

    const noteTitle = document.createElement('h1')
    noteTitle.classList = ['note-title']
    noteTitle.appendChild(document.createTextNode(note.title))

    const noteContent = document.createElement('div')
    noteContent.classList = ['note-content']

    const noteText = document.createElement('p')
    noteText.appendChild(document.createTextNode(note.content))
    noteContent.appendChild(noteText)

    const noteActions = document.createElement('div')
    noteActions.classList = 'note-actions note-actions--end'

    const editButton = document.createElement('button')
    editButton.classList = 'note-action btn-icon ic-edit'
    editButton.appendChild(document.createTextNode('Edit'))
    editButton.addEventListener('click', () => onEditNote(note))
    noteActions.appendChild(editButton)

    const deleteButton = document.createElement('button')
    deleteButton.classList = 'note-action btn-icon ic-delete'
    deleteButton.appendChild(document.createTextNode('Delete'))
    deleteButton.addEventListener('click', () => onDeleteNote(note))
    noteActions.appendChild(deleteButton)

    noteNode.appendChild(noteTitle)
    noteNode.appendChild(noteContent)
    noteNode.appendChild(noteActions)

    return noteNode
  }

  init()
})(window.app.NoteListPresenter, window.app.Note)
