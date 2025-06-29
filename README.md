# Projeto Gestão de Alunos

## Autor

- Diogo Amorim Vilas Boas nº31860

## Publicado em:

- **Frontend:** (https://trab1-restapi-davb-frontend.onrender.com)
- **Backend:** (https://trab1-restapi-davb.onrender.com/alunos)

---

## Instalação e Execução

### **Pré-requisitos**

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Git (opcional)

1. **Clona o repositório:**
   ```bash
   git clone <github.com/PWEB-2425/trab1-restapi-DA-VB>
   cd <trab1-restapi-DA-VB>
   ```

2. **Backend:**
   - Entra na pasta `backend`
   - Instala as dependências:
     ```bash
     npm install
     ```
   - Cria o ficheiro `.env` com a connection string do MongoDB
   - Corre o servidor:
     ```bash
     node server.js
     ```
   - O backend estará disponível em: (https://trab1-restapi-davb.onrender.com/alunos)

3. **Frontend:**
   - O frontend está publicado em: (https://trab1-restapi-davb-frontend.onrender.com)
   - Ou abrir o ficheiro `index.html` localmente no browser.

---

## Descrição da Base de Dados

**MongoDB**

- **Base de Dados:** gestaoalunos
- **Coleção:** alunos

### Exemplo:
```json
{
  "_id": "ObjectId",
  "nome": "Diogo",
  "apelido": "Vilas Boas",
  "curso": "Redes",
  "anoCurricular": 3
}
```

## Descrição da API (Rotas)

- **GET** `/alunos`  
  Lista todos os alunos.

- **POST** `/alunos`  
  Adiciona um novo aluno. 

  Exemplo:
  ```json
  {
    "nome": "Maria",
    "apelido": "Albertina",
    "curso": "Informática",
    "anoCurricular": 2
  }
  ```

- **PUT** `/alunos/:id`  
  Atualiza um aluno pelo id.

- **DELETE** `/alunos/:id`  
  Remove um aluno pelo id.

- **GET** `/cursos`  
  Lista todos os cursos disponíveis.

- **Swagger** `/api-docs`  
  Documentação interativa da API.

---

## Descrição do Frontend

O frontend foi desenvolvido em HTML, CSS e JavaScript.  
Permite:
- Listar alunos existentes;
- Adicionar, atualizar e remover alunos

A comunicação com o backend é feita via `fetch` para as rotas da API acima.

---

## Outros conteúdos relevantes

- Utilização de Render, pois este é gratuito.
- Projeto compatível com deploy na plataforma Render.
- O backend já está preparado para CORS, permitindo comunicação com o frontend.
- Utilização de MongoDB Atlas para facilitar deploy e testes remotos.