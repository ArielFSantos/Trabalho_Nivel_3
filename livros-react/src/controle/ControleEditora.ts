import { Editora } from '../modelo/Editora';

let editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Martins Fontes' },
  { codEditora: 2, nome: 'Editora Aleph' },
  { codEditora: 3, nome: 'Suma' },
];

class ControleEditora {
  obterLivros(): Array<Editora> {
    return editoras;
  }
}
export function getEditoras(): Array<Editora> {
  return editoras;
}


export function getNomeEditora(codEditora: number): string {
  const editora = editoras.find((e) => e.codEditora === codEditora);
  return editora ? editora.nome : '';
}

export default ControleEditora;
