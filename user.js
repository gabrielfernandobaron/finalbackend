const express = require("express")
const router = express.Router()
const controller = require('../controller/userController')
const { validar } = require('../middlewares/validarId')
const checks = require('../middlewares/checks')
const {validarchecks} = require('../middlewares/validarchecks')




router.get('/ver',controller.listar)
router.get('/axios',controller.axiosGet)
router.get('/ver/:id',validar ,controller.buscarPorId)
router.get('/buscar/:producto',controller.buscarPorNombre)
router.post('/crear', checks,validarchecks, controller.crear)
router.put('/editar/:id',validar,checks,validarchecks, controller.editar)
router.delete('/eliminar/:id', validar, controller.eliminar)






module.exports = router