'use strict'

module.exports = {
  // Login
  login: async (req, reply) => {
    try {
      return reply.nextRender('/login')
    } catch (err) {
      req.log.error(err)
    }
  }
}
