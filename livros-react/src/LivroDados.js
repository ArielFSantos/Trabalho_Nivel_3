import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControladorLivro from './controle/ControleLivros';
import { getEditoras } from "./controle/ControleEditora";

function LivroDados() {

    
  const controleLivro = new ControladorLivro();
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState('');
  const [opcoes, setOpcoes] = useState([]);
  

  const navigate = useNavigate();

  function tratarCombo(event) {
    setCodEditora(Number(event.target.value));
  }

  function incluir(event) {
    event.preventDefault();
    const livro = {
      codLivro: 0,
      titulo,
      resumo,
      autor: autores,
      codEditora,
    
  
    };
    controleLivro.incluir(livro);
    navigate('/');
  }


  useState(() => {
    const editoras = getEditoras();
    const opcoes = editoras.map(editora => ({
      value: editora.codEditora,
      text: editora.nome
    }));
    setOpcoes(opcoes);
  }, []);

  return (
    <main>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div class="form-group">
          <label htmlFor="titulo">Título:</label>
          <input class="form-control" id="exampleFormControlTextarea1" rows="3" type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
        </div>
        <div class="form-group">
          <label htmlFor="resumo">Resumo:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  value={resumo} onChange={e => setResumo(e.target.value)} />
        </div>
        <div class="form-group">
          <label htmlFor="codEditora">Editora:</label>
          <select class="form-control" id="codEditora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <div class="form-group">
          <label htmlFor="autores">Autores:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  value={autores} onChange={e => setAutores(e.target.value)} />
        </div>
        <button type="submit" class="btn btn-primary ">Salvar Dados</button>
      </form>
    </main>
  );
}

export default LivroDados;