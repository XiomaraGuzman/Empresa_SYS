import express from 'express'
import { crearCliente, editarCliente, eliminarCliente, mostrarCliente, mostrarClientes } from '../controllers/ClienteController.js'

const clienteRouter = express.Router ();


clienteRouter.post('/', crearCliente )
clienteRouter.get('/', mostrarClientes)
clienteRouter.get('/:id', mostrarCliente)
clienteRouter.delete('/:id', eliminarCliente)
clienteRouter.put('/:id', editarCliente)

export default clienteRouter