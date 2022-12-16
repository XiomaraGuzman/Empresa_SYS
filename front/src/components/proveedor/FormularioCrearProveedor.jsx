import React from "react";
import Header from "../layout/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const apiProveedores = "http://localhost:3001/proveedores";

const FormularioCrearProveedor = () => {
  const [NIT,setNIT] = useState("");
  const [telefono,setTelefono] = useState("");
  const [direccion,setDireccion] = useState("");
  const [correo,setCorreo] = useState ("");
  const [representante,setRepresentante] = useState("");
  const navigate = useNavigate()

  const guardarProveedor = async(e) => {
    e.preventDefault()
    const proveedor = {
      NIT: NIT,
      telefono: telefono,
      direccion: direccion,
      correo: correo,
     representante: representante
    }
    await axios.post(apiProveedores, proveedor)
    navigate('/proveedores')
  }

  return (
    <section>
      <Header />
      <section className="row">
        <section className="col-3"></section>
        <section className="col-6">
          <form onSubmit={guardarProveedor} className="form-control w-100 mt-5 p-5">
            <h1 className="m-5 text-4xl">Crear Nuevo Proveedor</h1>
            <input
              value={NIT}
              onChange={(e)=> setNIT(e.target.value)}
              placeholder="NIT"
              className="form-control mt-3"
              type="text"
            />
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Telefono"
              className="form-control mt-3 mb-3"
              type="text"
            />
             <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Direccion"
              className="form-control mt-3 mb-3"
              type="text"
            />
             <input
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Correo"
              className="form-control mt-3 mb-3"
              type="text"
            />
              <input
              value={representante}
              onChange={(e) => setRepresentante(e.target.value)}
              placeholder="Representante"
              className="form-control mt-3 mb-3"
              type="text"
            /> 
            <section className="">
              <input
                value={"Guardar"}
                className="btn bg-orange-600 form-control"
                type="submit"
              />
              <Link
                className="btn bg-orange-600 form-control"
                to={"/proveedores"}
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

export default FormularioCrearProveedor;