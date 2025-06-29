import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import alunosRouter from './routes/alunos.js';
import cursosRouter from './routes/cursos.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json' assert { type: 'json' };

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas da API
app.use('/alunos', alunosRouter);
app.use('/cursos', cursosRouter);

// Swagger (opcional)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Conexão MongoDB e start
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL)
  .then(() => app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`)))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));