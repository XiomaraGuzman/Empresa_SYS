import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/layout/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ListadoProductos from './components/productos/ListadoProducto'
import FormularioCrear from './components/productos/FormularioCrear'
import ListadoClientes from './components/clientes/ListadoClientes'
import FormularioCrearClientes from './components/clientes/FormularioCrearClientes'
import ListadoProveedor from './components/proveedor/ListadoProveedor'
import FormularioCrearProveedor from './components/proveedor/FormularioCrearProveedor'
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home /> 
  },
  {
    path: '/productos',
    element: <ListadoProductos />
  },
  {
    path: '/crear',
    element: <FormularioCrear />
  },
  // {
  //   path: '/clientes',
  //   element: <ListadoClientes/>
  // },
  // {
  //   path: '/crearCliente',
  //   element: <FormularioCrearClientes/>
  // },
  // {
  //   path: '/proveedor',
  //   element: <ListadoProveedor/>
  // },
  // {
  //   path: '/crearProveedor',
  //   element: <FormularioCrearProveedor/>
  // }

])

function App() {
  return(
    <section className='container'>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
