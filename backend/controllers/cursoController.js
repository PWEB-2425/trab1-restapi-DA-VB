const Curso = require('../models/Curso');

const listarCursos = async (req, res) => {
  const cursos = await Curso.find();
  res.json(cursos);
};

module.exports = {
  listarCursos
};