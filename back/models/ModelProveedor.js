import { DataTypes } from "sequelize";
import dataBase from "../database/conexionDatabase.js";

const Proveedor = dataBase.define('proveedores', {
    NIT: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    presentacion: {
        type: DataTypes.STRING
    }
})
export default Proveedor