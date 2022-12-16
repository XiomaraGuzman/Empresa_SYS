import Proveedor from '../models/ModelProveedor.js';


const crearProveedor = async (peticion, respuesta) => {
  try {
    await Proveedor.create(peticion.body);
    respuesta.json({
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    respuesta.json({
      message: `No se pudo registrar el ususario: ${error}`,
    });
  }
};
async function mostrarProveedores(peticion, respuesta) {
  try {
    const proveedores = await Proveedor.findAll();
    respuesta.json(proveedores);
  } catch (error) {
    respuesta.json({
      message: "Base de datos vacia",
    });
  }
}
const mostrarProveedor = async (peticion, respuesta) => {
  try {
    const proveedor = await Proveedor.findOne({
      where: { id: peticion.params.id },
    });
    respuesta.json(proveedor);
  } catch (error) {
    respuesta.json({
      message: "No existe el registro en la base de datos",
    });
  }
};
const editarProveedor = async (peticion, respuesta) => {
  try {
    await Proveedor.update(peticion.body, {
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
async function eliminarProveedor(peticion, respuesta) {
    try {
      await Proveedor.destroy({
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

 crearProveedor,
 mostrarProveedores,
 mostrarProveedor,
 editarProveedor,
 eliminarProveedor
};