import { DataTypes } from "sequelize";
import dataBase from "../database/conexionDatabase";

const Proveedor = dataBase.define('proveedor', {
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