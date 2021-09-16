'use strict'

// Dashboard
module.exports = {
  main: async (req, reply) => {
    reply.nextRender('/home')
  }
}
