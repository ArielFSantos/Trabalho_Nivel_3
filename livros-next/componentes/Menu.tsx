import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

const Menu: React.FC = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="index.tsx" passHref>Home</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" href="/LinhaLivroProps" passHref>Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" href="/" passHref>Novo</Link>
            </li>
          </ul>
      </nav>
    </div>
  );
};


export default Menu;
