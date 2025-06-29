# Trabalho Prático #1 – Consumo e Implementação de APIs RESTful

## Organização do Projeto

- `/frontend/` – Interface web (HTML/CSS/JS)
- `/backend/` – API real com Node.js + MongoDB
- `/mock-server/` – API simulada com JSON-server
- `/mock-data/` – Base de dados JSON original
- `/tests/` – Coleção de testes Postman

## Entregáveis
- Código funcional
- README.md com instruções claras
- Links de deploy (front e back)

---

## Como executar localmente

### Mock-server
```bash
cd mock-server
npm install
npm start
```
Acesse: http://localhost:3001/alunos

### API real (backend)
```bash
cd backend
cp .env.example .env # e configure sua string do MongoDB
npm install
npm start
```
Acesse: http://localhost:3000/alunos

### Frontend
Abra `frontend/index.html` em seu navegador (faça o ajuste do `API_URL` se for usar a API real)

---

## Deploy

- **Frontend (Vercel):** [https://nomes-app-frontend.vercel.app](https://nomes-app-frontend.vercel.app)
- **Backend/API (Render):** [https://nomes-app-backend.onrender.com](https://nomes-app-backend.onrender.com)

---

## Documentação da API
Acesse `/api-docs` no backend:
```
http://localhost:3000/api-docs
```

---

## Créditos
Desenvolvido por [Seu Nome] para a disciplina de Programação Web.