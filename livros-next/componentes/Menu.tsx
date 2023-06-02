import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/livroLista">
                <a className="nav-link">Livro Lista</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/livroDados">
                <a className="nav-link">Livro Dados</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
