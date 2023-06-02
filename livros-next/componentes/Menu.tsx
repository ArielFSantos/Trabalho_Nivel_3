import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
    <Link href="/" passHref>
        Home
    </Link>
        <Link href="/" passHref>
           Catálogo
        </Link>
        <Link href="/" passHref>
          Novo
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/livrolista" passHref>
               Livro Lista
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/livrodados" passHref>
                Livro Dados
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Menu;
