'use strict'

const env = {
  isProduction: process.env.NODE_ENV === 'production' || false,
  port: process.env.PORT || 4000
}

module.exports = env
