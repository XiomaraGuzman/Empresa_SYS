import React from "react";
import axios from "axios";
import Header from "../layout/Header";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const apiClientes = "http://localhost:3001/clientes";

const ListadoClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    listarClientes();
  }, []);

  const listarClientes = async () => {
    const response = await axios.get(apiClientes);
    setClientes(response.data);
    console.log(response.data);
  };

  return (
    <section className="prueba">
      <Header />
      <section>
        <Link to={'/crearCliente'} className="mt-5 bg-d0a478 btn">Nuevo cliente</Link>
      </section>
      <table className="table mt-5">
        <thead className="registro">
          <tr className="text-center">
            <th scope="col">Nombre</th>
            <th scope="col">Documento</th>
            <th scope="col">Correo</th>
            <th scope="col">Direccion</th>
            <th scope="col">Telefono</th>
            <th scope="col">Barrio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr className="text-center" key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.documento}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.barrio}</td>
             
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

export default ListadoClientes;