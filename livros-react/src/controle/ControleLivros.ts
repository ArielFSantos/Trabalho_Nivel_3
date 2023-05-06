import { Livro } from '../modelo/Livro';

let livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora:100,
    titulo: 'O Senhor dos Anéis',
    resumo:'Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.',
    autor: ['J.R.R. Tolkien'],
 
 
  },
  {
    codigo: 2,
    codEditora:200,
    titulo: 'Duna',
    resumo:'Paul Atreides é um jovem brilhante, dono de um destino além de sua compreensão. Ele deve viajar para o planeta mais perigoso do universo para garantir o futuro de seu povo.',
    autor: ['Frank Herbert'],

  },
  {
    codigo: 3,
    codEditora:300,
    titulo: 'O Iluminado',
    resumo:'Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições. Jack não consegue escrever e as visões de Danny se tornam mais perturbadoras. O escritor descobre os segredos sombrios do hotel e começa a se transformar em um maníaco homicida, aterrorizando sua família.',
    autor: ['Stephen King'],
  
  }
];

class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const ultimoCodigo = livros.reduce(
      (maiorCodigo, livro) => Math.max(maiorCodigo, livro.codigo),
      0
    );

    livro.codigo = ultimoCodigo + 1;

    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indiceLivro = livros.findIndex((livro) => livro.codigo === codigo);

    if (indiceLivro !== -1) {
      livros.splice(indiceLivro, 1);
    }
  }
}

export default ControleLivros;