/* Importacion de dependencia y archivos */
import express from 'express';
import { Sequelize } from 'sequelize';
import dataBase from './database/conexionDatabase.js';
import productoRouter from './routes/RouterProducto.js';
import cors from 'cors'

/* Instancia de Expres y apertura de puerto */
const app = express();
const port = 3001;

/* Validacion de coneccion a la base de datos */
try {
  await dataBase.authenticate()
  console.log(`Coneccion exitosa a la base de datos.`)
} catch (error) {
  console.log(`CONECCION no exitosa: ${error}`)
}

app.use(cors())
app.use(express.json())

app.use('/productos', productoRouter)

/* Ejecucion de servidor */
app.listen(port, ()=> {
  console.log(`Servidor corriendo en el puerto ${port}`)
  console.log(`Servidor funcionando en http://localhost:3001`)
  console.log(`Endpoint Clientes http://localhost:3001/productos`)
});