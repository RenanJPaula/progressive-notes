;(function () {
  'use strict'

  const inputFields = document.querySelectorAll('.input-field')

  inputFields.forEach(inputField => {
    const label = inputField.querySelector('label')
    const input = inputField.querySelector('input') || inputField.querySelector('textarea')

    input.addEventListener('keydown', update)
    input.addEventListener('keyup', update)
    input.addEventListener('focus', update)
    input.addEventListener('blur', update)

    function update () {
      if (input.value.length > 0) {
        label.classList.add('float')
        input.classList.add('valid')
      } else {
        label.classList.remove('float')
        input.classList.remove('valid')
      }
    }

    update()
  })
})()
