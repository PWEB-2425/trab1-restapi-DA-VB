import express from 'express';
import { listarCursos } from '../controllers/cursoController.js';

const router = express.Router();

router.get('/', listarCursos);

export default router;