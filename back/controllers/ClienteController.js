import Cliente from "../models/ModelCliente.js";
import { check, validationResult } from "express-validator";

const crearCliente = async (peticion, respuesta) => {
  try {
    await Cliente.create(peticion.body);
    respuesta.json({
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    respuesta.json({
      message: `No se pudo registrar el ususario: ${error}`,
    });
  }
};
async function mostrarClientes(peticion, respuesta) {
  try {
    const clientes = await Cliente.findAll();
    respuesta.json(clientes);
  } catch (error) {
    respuesta.json({
      message: "Base de datos vacia",
    });
  }
}
const mostrarCliente = async (peticion, respuesta) => {
  try {
    const cliente = await Cliente.findOne({
      where: { id: peticion.params.id },
    });
    respuesta.json(cliente);
  } catch (error) {
    respuesta.json({
      message: "No existe el registro en la base de datos",
    });
  }
};
const editarCliente = async (peticion, respuesta) => {
  try {
    await Cliente.update(peticion.body, {
      where: { id: peticion.params.id },
    });
    respuesta.json({
      message: "registro Actualizado correctamente",
    });
  } catch (error) {
    respuesta.json({
      message: error.message,
    });
  }
};
async function eliminarCliente(peticion, respuesta) {
    try {
      await Cliente.destroy({
        where: { id: peticion.params.id },
      });
      respuesta.json({
        message: "Resgistro eliminado correctamente",
      });
    } catch (error) {
        respuesta.json({
        message: error.message,
      });
    }
  }

export {
 crearCliente,
 mostrarClientes,
 mostrarCliente,
  editarCliente,
  eliminarCliente,
};