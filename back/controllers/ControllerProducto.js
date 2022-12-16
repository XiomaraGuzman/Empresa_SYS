import Producto from "../models/ModelProducto.js";


const crearProducto = async (peticion, respuesta) => {
  try {
    await Producto.create(peticion.body);
    respuesta.json({
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    respuesta.json({
      message: `No se pudo registrar el ususario: ${error}`,
    });
  }
};
async function mostrarProductos(peticion, respuesta) {
  try {
    const productos = await Producto.findAll();
    respuesta.json(productos);
  } catch (error) {
    respuesta.json({
      message: "Base de datos vacia",
    });
  }
}
const mostrarProducto = async (peticion, respuesta) => {
  try {
    const producto = await Producto.findOne({
      where: { id: peticion.params.id },
    });
    respuesta.json(producto);
  } catch (error) {
    respuesta.json({
      message: "No existe el registro en la base de datos",
    });
  }
};
const editarProducto = async (peticion, respuesta) => {
  try {
    await Producto.update(peticion.body, {
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
async function eliminarProducto(peticion, respuesta) {
    try {
      await Producto.destroy({
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
  crearProducto,
  mostrarProductos,
  mostrarProducto,
  editarProducto,
  eliminarProducto,
};
