;(function () {
  'use strict'

  const fn = {}

  fn.asc = (attribute) => {
    return (a, b) => a[attribute] > b[attribute] ? 1 : -1
  }

  fn.desc = (attribute) => {
    return (a, b) => a[attribute] > b[attribute] ? -1 : 1
  }

  fn.wrapWith = (constructor) => {
    return (object) => new constructor(object)
  }

  fn.call = (funcName) => {
    return (object) => object[funcName](object)
  }

  window.fn = fn
})()
