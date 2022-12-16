import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <h1>SYS</h1>
        </a>
        <Link to={'/inicio'} className="navbar-brand" >
          Inicio
        </Link>
        <Link to={'/clientes'} className="navbar-brand" >
          Clientes
        </Link>
        <Link to={'/productos'} className="navbar-brand">
          Productos
        </Link>
        <Link to={'/proveedores'} className="navbar-brand" >
          Proveedores
        </Link>
      </div>
    </nav>
  );
};

export default Header;