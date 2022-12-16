
import express from 'express';
import dataBase from './database/conexionDatabase.js';
import productoRouter from './routes/RouterProducto.js';
import cors from 'cors'
import clienteRouter from './routes/RouterClientes.js';
import proveedorRouter from './routes/RouterProveedor.js';



const app = express();
const port = 3001;

try {
  await dataBase.authenticate()
  console.log(`Coneccion exitosa a la base de datos.`)
} catch (error) {
  console.log(`CONECCION no exitosa: ${error}`)
}

app.use(cors())
app.use(express.json())

app.use('/productos', productoRouter)
app.use('/clientes',clienteRouter)
app.use('/proveedores', proveedorRouter)

/* Ejecucion de servidor */
app.listen(port, ()=> {
  console.log(`Servidor corriendo en el puerto ${port}`)
  console.log(`Servidor funcionando en http://localhost:3001`)
  console.log(`Endpoint Clientes http://localhost:3001/productos/clientes/proveedores`)
  
});