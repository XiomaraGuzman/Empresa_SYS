import React from "react";
import axios from "axios";
import Header from "../layout/Header";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const apiProductos = "http://localhost:3001/productos";

const ListadoProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    listarProductos();
  }, []);

  const listarProductos = async () => {
    const response = await axios.get(apiProductos);
    setProductos(response.data);
    console.log(response.data);
  };

  return (
    <section className="prueba">
      <Header />
      <section>
        <Link to={'/crear'} className="mt-5 bg-d0a478 btn">Nuevo producto</Link>
      </section>
      <table className="table mt-5">
        <thead className="registro">
          <tr className="text-center">
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">cantidad</th>
            <th scope="col">referencia</th>
            <th scope="col">precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr className="text-center" key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.referencia}</td>
              <td>{producto.precio}</td>
             
              <td>
                <Link className="btn " href="">Editar</Link> {"| "}
                <Link className="btn " href="">Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListadoProductos;