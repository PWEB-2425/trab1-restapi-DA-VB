const express = require('express');
const { listarAlunos, criarAluno, atualizarAluno, apagarAluno } = require('../controllers/alunoController');

const router = express.Router();

router.get('/', listarAlunos);
router.post('/', criarAluno);
router.put('/:id', atualizarAluno);
router.delete('/:id', apagarAluno);

module.exports = router;