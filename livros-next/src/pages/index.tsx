import Head from 'next/head';
import Menu from '../../componentes/Menu';
import 'bootstrap/dist/css/bootstrap.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>
      <Menu />
      
      <main className="d-flex align-items-center justify-content-center vh-100">
        <h1 className="text-center" >Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
