'use strict'

module.exports = {
  // Server port
  port: 3000,
  // Name of MongoDB database
  db: 'sample',
  // Open server url on launch
  openURL: true,
  // Fastify configuration
  fastify: {
    logger: true,
    pluginTimeout: 50000
  }
}
