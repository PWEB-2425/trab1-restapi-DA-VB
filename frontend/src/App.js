import React, { useState, useEffect } from "react";
import "./App.css";

const BACKEND_URL = "https://trab1-restapi-davb.onrender.com/alunos";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    apelido: "",
    curso: "",
    anoCurricular: ""
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Buscar alunos ao carregar a página
  useEffect(() => {
    fetchAlunos();
  }, []);

  const fetchAlunos = async () => {
    setLoading(true);
    try {
      const res = await fetch(BACKEND_URL);
      const data = await res.json();
      setAlunos(data);
    } catch (error) {
      setMsg("Erro ao buscar alunos!");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.apelido || !form.curso || !form.anoCurricular) {
      setMsg("Preencha todos os campos!");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error();
      setMsg("Aluno adicionado com sucesso!");
      setForm({ nome: "", apelido: "", curso: "", anoCurricular: "" });
      fetchAlunos();
    } catch (error) {
      setMsg("Erro ao adicionar aluno!");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja apagar este aluno?")) return;
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setMsg("Aluno apagado!");
      fetchAlunos();
    } catch (error) {
      setMsg("Erro ao apagar aluno!");
    }
    setLoading(false);
  };

  return (
    <div className="main-container">
      <h1>Gestão de Alunos</h1>
      <form className="form-linha" onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          name="apelido"
          placeholder="Apelido"
          value={form.apelido}
          onChange={handleChange}
        />
        <input
          name="curso"
          placeholder="Curso"
          value={form.curso}
          onChange={handleChange}
        />
        <input
          name="anoCurricular"
          placeholder="Ano Curricular"
          value={form.anoCurricular}
          onChange={handleChange}
          type="number"
          min="1"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adicionando..." : "Adicionar Aluno"}
        </button>
      </form>
      {msg && <div className="msg">{msg}</div>}

      <h2>Alunos Cadastrados</h2>
      <table className="tabela-alunos">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Apelido</th>
            <th>Curso</th>
            <th>Ano</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Nenhum aluno cadastrado.
              </td>
            </tr>
          ) : (
            alunos.map((a) => (
              <tr key={a._id}>
                <td>{a.nome}</td>
                <td>{a.apelido}</td>
                <td>{a.curso}</td>
                <td>{a.anoCurricular}</td>
                <td>
                  <button
                    className="acao-btn"
                    onClick={() => handleDelete(a._id)}
                    title="Apagar"
                  >
                    🗑️
                  </button>
                  {/* Se quiseres editar, podes adicionar um botão aqui */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;