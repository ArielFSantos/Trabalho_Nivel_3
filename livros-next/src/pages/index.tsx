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

      <main className="main">
        <h1   className="title align-middle" >Página Inicial</h1>
      </main>
    </div>
    
  );
};

export default Home;
