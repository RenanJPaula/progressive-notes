'use strict'

const APPLICATION_NAME = 'progressive-notes'
const VERSION = '1.0.0'
const CACHE_NAME = `${APPLICATION_NAME}-${VERSION}`
const OLD_VERSIONS_OF_CACHE = []

const FILES = [
  '/',
  '/app.manifest',
  '/assets/css/app.css',
  '/assets/js/app.js',
  '/assets/imgs/favicon.ico',
  '/assets/imgs/icons/ic-add.svg',
  '/assets/imgs/icons/ic-delete.svg',
  '/assets/imgs/icons/ic-edit.svg'
]

self.addEventListener('install', () => console.log('Application Instaled'))

self.addEventListener('activate', () => {
  openCache()
    .then(addAllFilesOnCache)
    .then(deleteOldFilesOfCache)

  function openCache () {
    return caches.open(CACHE_NAME)
  }

  function addAllFilesOnCache (cache) {
    return cache.addAll(FILES)
  }

  function deleteOldFilesOfCache () {
    return Promise.all(OLD_VERSIONS_OF_CACHE.map((cacheName) => caches.delete(cacheName)))
  }
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  const responsePromise = caches.match(request).then(lazyLoad)

  function lazyLoad (cacheResponse) {
    return cacheResponse || fetch(request)
  }

  event.respondWith(responsePromise)
})
