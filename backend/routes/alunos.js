import express from 'express';
import { listarAlunos, criarAluno, atualizarAluno, apagarAluno } from '../controllers/alunoController.js';

const router = express.Router();

router.get('/', listarAlunos);
router.post('/', criarAluno);
router.put('/:id', atualizarAluno);
router.delete('/:id', apagarAluno);

export default router;