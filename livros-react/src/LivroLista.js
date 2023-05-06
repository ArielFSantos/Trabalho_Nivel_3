import React, { useState, useEffect, useMemo } from 'react';
import ControleLivro from './controle/ControleLivros'
import { getNomeEditora } from './controle/ControleEditora';
import 'bootstrap';

function LinhaLivro(props) {
  const { livro, excluir } = props;
  const nomeEditora = getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.autor.map((autor, index) => <li key={index}>{autor}</li>)}</td>
      <td>{nomeEditora}</td>
      <td>{livro.ano}</td>
      <td className='.bg-danger'>
        <button type="button" class="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
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
      <h1>Catálogo de Livros</h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Título</th>
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