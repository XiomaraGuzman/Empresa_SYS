import React from "react";
import axios from "axios";
import Header from "../layout/Header";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const apiProveedores = "http://localhost:3001/proveedores";

const ListadoProveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    listarProveedores();
  }, []);

  const listarProveedores = async () => {
    const response = await axios.get(apiProveedores);
    setProveedores(response.data);
    console.log(response.data);
  };

  return (
    <section>
      <Header />
      <section>
        <Link to={'/crearProveedor'} className="mt-5 bg-d0a478 btn">Nuevo Proveedor</Link>
      </section>
      <table className="table mt-5">
        <thead className="registro">
          <tr className="text-center">
            <th scope="col">NIT</th>
            <th scope="col">Telefono</th>
            <th scope="col">Direccion</th>
            <th scope="col">correo</th>
            <th scope="col">representante</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((Proveedor) => (
            <tr className="text-center" key={Proveedor.id}>
              <td>{Proveedor.NIT}</td>
              <td>{Proveedor.telefono}</td>
              <td>{Proveedor.direccion}</td>
              <td>{Proveedor.correo}</td>
              <td>{Proveedor.representante}</td>
             
              <td>
                <Link className="btn bg-orange-500" href="">Editar</Link> {"| "}
                <Link className="btn bg-red-500" href="">Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListadoProveedores;