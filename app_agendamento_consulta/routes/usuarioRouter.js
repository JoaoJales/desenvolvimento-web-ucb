const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get("/login", usuarioController.getLoginView);
router.post("/login", usuarioController.loginUsuario);
router.get("/cadastro", usuarioController.getCadastroView);
router.post("/cadastro", usuarioController.cadastrarUsuario);

module.exports = router;