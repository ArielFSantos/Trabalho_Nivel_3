import Head from 'next/head';
import Menu from '../../componentes/Menu';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>

      <Menu />

      <main className="main">
        <h1 className="title">Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
