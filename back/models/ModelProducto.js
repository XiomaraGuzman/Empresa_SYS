import { DataTypes } from "sequelize";
import dataBase from "../database/conexionDatabase.js";

const Producto = dataBase.define('productos', {
  nombre: {
    type: DataTypes.STRING
  }, 
  descripcion: {
    type: DataTypes.STRING
  },
  referencia: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.STRING
  },
  cantidad: {
    type: DataTypes.STRING
  }
})


export default Producto