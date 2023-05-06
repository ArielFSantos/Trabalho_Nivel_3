export class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autor:string[];
   
  
    constructor(codEditora: number, codigo: number,titulo:string,resumo:string,autor:[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo
        this.resumo = resumo
        this.autor = autor
        
       
    }
  }