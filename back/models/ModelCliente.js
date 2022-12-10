import { DataTypes } from "sequelize";
import dataBase from "../database/conexionDatabase.js";

const Cliente = dataBase.define('clientes', {
    nombre: {
        type: DataTypes.STRING
    },
    documento: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    barrio: {
        type: DataTypes.STRING 
    }
})

export default Cliente