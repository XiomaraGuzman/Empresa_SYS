import express from 'express';
import sequelize from 'sequelize';
import dataBase from './database/conexionDatabase.js';
import productoRouter from './routes/RouterProducto.js';
import cors from 'cors'

const app = express();
const port =3001;
try {
    await dataBase.authenticate()
    console.log(`conexion exitosa a la base de datos`)
} catch (error) {
    console.log(`conexion no exitosa ${error}`) 
}
app.use(cors())
app.use(express.json())
app.use('/productos', productoRouter)



app.listen(port, ()=>{
    console.log(`servidor corriendo en ete puerto ${port}`)
    console.log(`Servidor funcionando en http://localhost:3001`)
})