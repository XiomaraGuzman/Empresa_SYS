import React from "react";
import Header from "../layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const apiProductos = "http://localhost:3001/productos";

const FormularioCrear = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [referencia, setReferencia] = useState ("");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate()

  const guardarProducto = async(e) => {
    e.preventDefault()
    const producto = {
      nombre: nombre,
      descripcion: descripcion,
      cantidad: cantidad,
      referencia: referencia,
      precio: precio
    }
    await axios.post(apiProductos, producto)
    navigate('/productos')
  }

  return (
    <section>
      <Header />
      <section className="row">
        <section className="col-3"></section>
        <section className="col-6">
          <form onSubmit={guardarProducto} className="form-control ">
            <h1 className="m-5 text-4xl">Crear Nuevo Producto</h1>
            <input
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
              placeholder="Nombre"
              className="form-control "
              type="text"
            />
            <input
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripcion"
              className="form-control "
              type="text"
            />
             <input
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              placeholder="Cantidad"
              className="form-control"
              type="text"
            />
             <input
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              placeholder="Referencia"
              className="form-control"
              type="text"
            />
              <input
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Precio"
              className="form-control"
              type="text"
            /> 
            <section className="">
              <input
                value={"Guardar"}
                className="btn form-control"
                type="submit"
              />
              <Link
                className="btn form-control"
                to={"/productos"}
              >
                Cancelar
              </Link>
            </section>
          </form>
        </section>
        <section className="col-3"></section>
      </section>
    </section>
  );
};

export default FormularioCrear;