import Cliente from "../models/ModelCliente";

const crearCliente = async (req, res) => {
    try {
        await Cliente.create(req.body)
        res.json({
            message: 'usuario creado correctamente'
        })
    } catch (error) {
        res.json({
            message: `no se pudo registrar el ususario: ${error}`
        })
    }
}
async function mostrarClientes(req, res) {
    try {
        const clientes = await Cliente.findAll()
        res.json(clientes)
    } catch (error) {
        res.json({
        message: 'base de datos vacia'
       }) 
    }

}
const mostrarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findOne({where: {id: peticion.params.id}})
        res.json(cliente)
    } catch (error) {
        res.json({
            message: `no se pudo registrar el ususario: ${error}`
        })      
    }
}
const editarCliente = async (req, res) => {

}
const eliminarCliente = async (req, res) => {

}

export{
    crearCliente,
    mostrarClientes,
    mostrarCliente,
    editarCliente,
    eliminarCliente
}