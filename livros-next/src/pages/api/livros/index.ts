import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../../classes/controle/ControleLivros';
import { Livro } from '../../../../classes/modelo/Livro';

export const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
    
    try {
        if (req.method === 'GET') {
          const livros = controleLivro.obterLivros();
          res.status(200).json(livros);
        } else {
          res.status(405).end(); 
        }
      } catch (error) {
        res.status(500).end(); 
      }
      try {
        if (req.method === 'POST') {
          const livro = req.body;
          controleLivro.incluir(livro);
          res.status(200).json({ message: 'Sucesso' });
        } else {
          res.status(405).end(); 
        }
      } catch (error) {
        res.status(500).end(); 
      }
      try {
        if (req.method === 'DELETE') {
          const codigo = Number(req.query.codigo);
          controleLivro.excluir(codigo);
          res.status(200).json({ message: 'Sucesso' });
        } else {
          res.status(405).end(); 
        }
      } catch (error) {
        res.status(500).end(); 
      }


};
