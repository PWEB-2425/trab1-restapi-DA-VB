import mongoose from 'mongoose';

const cursoSchema = new mongoose.Schema({
  nomeDoCurso: { type: String, required: true }
});

export default mongoose.model('Curso', cursoSchema);