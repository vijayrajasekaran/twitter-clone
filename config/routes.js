'use strict'

// Controllers
const loginController = require('../controllers/loginController')
const homeController = require('../controllers/homeController')

module.exports = [
  {
    method: 'GET',
    url: '/',
    handler: loginController.login
  },
  {
    method: 'GET',
    url: '/home',
    handler: homeController.main
  },
  {
    method: 'GET',
    url: '/view',
    handler: (req, reply) => {
      reply.view('/views/sample.pug', { text: 'Rendered with view-engine' })
    }
  }
]
