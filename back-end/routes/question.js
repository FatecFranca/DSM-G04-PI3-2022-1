const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')

// Importa o controller correspondente 
const controller = require('../controllers/question')

router.post('/', controller.create)
router.get('/', verifyToken, controller.retrieve)
router.get('/', controller.retrieve)
router.get('/:id', controller.retrieveOne)
router.put('/', controller.update)
router.delete('/', controller.delete)

module.exports = router 