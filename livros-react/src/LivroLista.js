import React, { useState, useEffect, useMemo } from 'react';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';


function LinhaLivro(props) {
  const { livro, excluir } = props;
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.autor.map((autor, index) => <li key={index}>{autor}</li>)}</td>
      <td>{nomeEditora}</td>
      <td>{livro.ano}</td>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  
  const controleLivro = useMemo(() => new ControleLivro(), []);

  useEffect(() => {
    if (!carregado) {
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }
  }, [carregado, controleLivro]);

  const excluir = (codigoLivro) => {
    controleLivro.excluir(codigoLivro);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ano</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}