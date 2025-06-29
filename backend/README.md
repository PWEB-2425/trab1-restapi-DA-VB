# Backend (Node.js + Express + MongoDB/Mongoose)

## Como rodar

1. Crie um arquivo `.env` com a variável `MONGO_URL`
2. Execute `npm install`
3. Execute `node server.js`

As rotas da API serão:
- GET/POST/PUT/DELETE `/alunos`
- GET `/cursos`# Backend (Node.js + Express + MongoDB/Mongoose)

## Como rodar

1. Copie o arquivo `.env.example` para `.env` com a connection string do MongoDB.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
4. Acesse a documentação Swagger em `https://trab1-restapi-davb.onrender.com/api-docs`

As rotas da API serão:
- GET/POST/PUT/DELETE `/alunos`
- GET `/cursos`

---
## Estrutura MVC
Os arquivos já estão separados em controllers, models e routes para facilitar manutenção e organização.

---
## Swagger
Documentação acessível em `/api-docs`.