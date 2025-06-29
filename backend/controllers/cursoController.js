import Curso from '../models/Curso.js';

export const listarCursos = async (req, res) => {
  const cursos = await Curso.find();
  res.json(cursos);
};