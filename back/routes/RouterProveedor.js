import express from 'express'
import { crearProveedor, editarProveedor, eliminarProveedor, mostrarProveedor, mostrarProveedores } from '../controllers/ProveedorController.js'

const proveedorRouter = express.Router();

proveedorRouter.post('/', crearProveedor)
proveedorRouter.get('/', mostrarProveedores)
proveedorRouter.get('/:id', mostrarProveedor)
proveedorRouter.delete('/:id',eliminarProveedor )
proveedorRouter.put('/:id', editarProveedor)

export default proveedorRouter