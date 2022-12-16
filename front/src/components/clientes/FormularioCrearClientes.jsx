import React from "react";
import Header from "../layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const apiClientes = "http://localhost:3001/clientes";

const FormularioCrearCliente = () => {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [barrio, setBarrio] = useState("");
  const navigate = useNavigate()

  const guardarCliente = async(e) => {
    e.preventDefault()
    const cliente = {
      nombre: nombre,
      documento: documento,
      correo: correo,
      direccion: direccion,
      telefono: telefono,
      barrio: barrio
    }
    await axios.post(apiClientes, cliente)
    navigate('/clientes')
  }

  return (
    <section>
      <Header />
      <section className="row">
        <section className="col-3"></section>
        <section className="col-6">
          <form onSubmit={guardarCliente} className="form-control ">
            <h1 className="m-5 text-4xl">Crear nuevo Cliente</h1>
            <input
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
              placeholder="Nombre"
              className="form-control mt-3"
              type="text"
            />
            <input
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              placeholder="Documento"
              className="form-control "
              type="text"
            />
             <input
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Correo"
              className="form-control"
              type="text"
            />
             <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Direccion"
              className="form-control "
              type="text"
            />
              <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Telefono"
              className="form-control "
              type="text"
            /> 
            <input
              value={barrio}
              onChange={(e) => setBarrio(e.target.value)}
              placeholder="Barrio"
              className="form-control "
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

export default FormularioCrearCliente;