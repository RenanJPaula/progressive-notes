;(function (NoteRepository, Note, Modal) {
  'use strict'

  const mNoteList = document.getElementById('noteList')
  const mBtnNewNote = document.getElementById('btnNewNote')
  const mModalNote = new Modal({ selector: '#modalNote' })
  const mTxtNoteTitle = document.getElementById('txtNoteTitle')
  const mTxtNoteContent = document.getElementById('txtNoteContent')
  const mBtnCalcelSaveNote = document.getElementById('btnCalcelSaveNote')
  const mBtnSaveNote = document.getElementById('btnSaveNote')
  const mModalConfirmDelete = new Modal({ selector: '#modalConfirmDelete' })
  const mBtnCalcelDelete = document.getElementById('btnCalcelDelete')
  const mBtnConfirmDelete = document.getElementById('btnConfirmDelete')

  function init () {
    updateNoteList()
    addOnNewNoteBtnClick()
  }

  function updateNoteList (notes) {
    NoteRepository.getAll()
      .then((notes) => {
        mNoteList.innerHTML = ''
        notes.map(renderNoteCard)
        .forEach(noteHtmlNode => mNoteList.appendChild(noteHtmlNode))
      })
  }

  function addOnNewNoteBtnClick () {
    mBtnNewNote.addEventListener('click', () => {
      mModalNote.open()
      updateNoteForm(new Note())
    })
  }

  function onSaveNote (note) {
    NoteRepository.save(note)
      .then(() => {
        mModalNote.close()
        updateNoteList()
      })
  }

  function onCancelSaveNote (note) {
    mModalNote.close()
  }

  function onEditNote (note) {
    updateNoteForm(note)
    mModalNote.open()
  }

  function onDeleteNote (note) {
    mModalConfirmDelete.open()
    mBtnConfirmDelete.onclick = () => {
      NoteRepository.delete(note)
      updateNoteList()
      mModalConfirmDelete.close()
    }
    mBtnCalcelDelete.onclick = () => mModalConfirmDelete.close()
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
    noteText.appendChild(document.createTextNode(note.content.replace('/n', '<br>')))
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

  function updateNoteForm (note) {
    mTxtNoteTitle.value = note.title
    mTxtNoteContent.value = note.content
    mBtnSaveNote.onclick = () => {
      note.title = mTxtNoteTitle.value
      note.content = mTxtNoteContent.value
      onSaveNote(note)
    }
    mBtnCalcelSaveNote.onclick = () => onCancelSaveNote(note)
  }

  init()
})(window.app.repositories.NoteRepository,
   window.app.models.Note,
   window.app.components.Modal)
