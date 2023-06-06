import { useState, useEffect } from 'react';
import Head from 'next/head';
import Menu from '../../componentes/Menu';
import styles from '../styles/Home.module.css';
import { NextPage } from 'next';
import React from 'react';


const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
  const resposta = await fetch(baseURL);
  return resposta.json();
};

const excluirLivro = async (codigo: number) => {
  const resposta = await fetch(`${baseURL}/${codigo}`, {
    method: 'DELETE',
  });
  return resposta.ok;
};

const LivroLista:NextPage = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      obter().then((dados) => {
        setLivros(dados);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo: number) => {
    await excluirLivro(codigo);
    setCarregado(false);
  };

  return (
    <div>
      <Head>
        <title>Livro Lista</title>
      </Head>
      <Menu />
      <main className="container">
        <h1>Página de Lista de Livros</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Título</th>
              <th className="w-50 p-2">Resumo</th>
              <th>Autor</th>
              <th>Editora</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro: any) => (
              <tr key={livro.codigo}>
                <td>{livro.titulo}</td>
                <td>{livro.resumo}</td>
                <td>{livro.autor}</td>
                <td>{livro.editora}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => excluir(livro.codigo)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
