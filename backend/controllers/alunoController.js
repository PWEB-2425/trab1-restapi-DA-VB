import Aluno from '../models/Aluno.js';

export const listarAlunos = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

export const criarAluno = async (req, res) => {
  const aluno = new Aluno(req.body);
  await aluno.save();
  res.status(201).json(aluno);
};

export const atualizarAluno = async (req, res) => {
  const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(aluno);
};

export const apagarAluno = async (req, res) => {
  await Aluno.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};