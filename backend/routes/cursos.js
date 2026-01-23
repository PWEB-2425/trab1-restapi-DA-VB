const express = require('express');
const { listarCursos } = require('../controllers/cursoController');

const router = express.Router();

router.get('/', listarCursos);

module.exports = router;