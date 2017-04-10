;(function (NoteRepository, Note, Modal, NoteCard) {
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
    const noteCard = new NoteCard(note)
    noteCard.onEditNoteListener(onEditNote)
    noteCard.onDeleteNoteListener(onDeleteNote)
    return noteCard.render()
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
   window.app.components.Modal,
   window.app.components.NoteCard)
