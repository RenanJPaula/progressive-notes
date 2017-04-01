;(function (app, body) {
  'use strict'
  const MODAL_SHOW_CLASS = 'modal--show'

  function createOverlay () {
    const overlay = document.createElement('div')
    overlay.classList.add('modal-overlay')
    return overlay
  }

  class Modal {
    constructor (options) {
      this.selector = options.selector
      this._overlay = createOverlay()
    }

    get selector () { return this._selector }

    set selector (selector) {
      if (!selector) throw new Error('The selector of modal is required')
      this._selector = selector
      this._modal = document.querySelector(this._selector)
    }

    open () {
      this._modal.classList.add(MODAL_SHOW_CLASS)
      body.appendChild(this._overlay)
      body.style.overflow = 'hidden'
    }

    close () {
      this._modal.classList.remove(MODAL_SHOW_CLASS)
      body.removeChild(this._overlay)
      body.style.overflow = 'auto'
    }
  }

  app.components.Modal = Modal
})(window.app, window.document.body)
