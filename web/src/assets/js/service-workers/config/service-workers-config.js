;(function (serviceWorker) {
  'use strict'

  const SERVICE_WORKERS = [
    '/assets/js/service-workers/offline-service-worker.js'
  ]

  if (serviceWorker) {
    SERVICE_WORKERS.forEach((serviceWorkerFile) => registryServiceWorker(serviceWorkerFile))
  }

  function registryServiceWorker (path) {
    serviceWorker.register(path)
  }
})(window.navigator.serviceWorker)
