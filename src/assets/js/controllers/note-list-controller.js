;(function (Note, NoteRepository) {
  'use strict'

  // components
  const btnNewNote = document.getElementById('btnNewNote')
  const noteList = document.getElementById('noteList')

  function init () {
    addOnNewNoteBtnClick()
    renderNoteList()
  }

  function addOnNewNoteBtnClick () {
    btnNewNote.addEventListener('click', () => {
      NoteRepository.save(new Note({
        title: 'Teste',
        content: 'This is a content test of Note'
      }))

      renderNoteList()
    })
  }

  function addOnEditButtonClick (note) {
    return () => {
      console.log('Edit', note)
    }
  }

  function addOnDeleteButtonClick (note) {
    return () => {
      console.log('Delete', note)
    }
  }

  function renderNoteList () {
    NoteRepository.getAll()
      .then(notes => notes.map(renderNote))
      .then(notesHtmlNode => {
        noteList.innerHTML = ''
        notesHtmlNode.forEach(noteHtmlNode => noteList.appendChild(noteHtmlNode))
      })
  }

  function renderNote (note) {
    const noteNode = document.createElement('div')
    noteNode.classList = ['note depth depth--floatable']

    const noteTitle = document.createElement('h1')
    noteTitle.classList = ['note-title']
    noteTitle.appendChild(document.createTextNode(note.title))

    const noteContent = document.createElement('div')
    noteContent.classList = ['note-content']

    const noteText = document.createElement('p')
    noteText.appendChild(document.createTextNode(note.content))
    noteContent.appendChild(noteText)

    const noteActions = document.createElement('div')
    noteActions.classList = ['note-action']

    const editButton = document.createElement('button')
    editButton.classList = ['btn-icon ic-edit']
    editButton.appendChild(document.createTextNode('Edit'))
    editButton.addEventListener('click', addOnEditButtonClick(note))
    noteActions.appendChild(editButton)

    const deleteButton = document.createElement('button')
    deleteButton.classList = ['btn-icon ic-delete']
    deleteButton.appendChild(document.createTextNode('Delete'))
    deleteButton.addEventListener('click', addOnDeleteButtonClick(note))
    noteActions.appendChild(deleteButton)

    noteNode.appendChild(noteTitle)
    noteNode.appendChild(noteContent)
    noteNode.appendChild(noteActions)

    return noteNode
  }

  init()
})(window.app.Note, window.app.NoteRepository)
