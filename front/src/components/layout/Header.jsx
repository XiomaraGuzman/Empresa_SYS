import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <h1>SYS</h1>
        </a>
        <Link to={'/inicio'} className="navbar-brand" href="">
          Inicio
        </Link>
        <Link to={'/clientes'} className="navbar-brand" href="">
          Clientes
        </Link>
        <Link to={'/productos'} className="navbar-brand">
          Productos
        </Link>
        <Link to={'/proveedores'} className="navbar-brand" href="">
          Proveedores
        </Link>
      </div>
    </nav>
  );
};

export default Header;