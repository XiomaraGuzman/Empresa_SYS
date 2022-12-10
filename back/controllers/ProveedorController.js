import Proveedor from "../models/ModelProveedor";

const crearProveedor = async (req, res) => {
    try {
        await Proveedor.create(req.body)
        res.json({
            message: 'usuario creado correctamente'
        })
    } catch (error) {
        res.json({
            message: `no se pudo registrar el ususario: ${error}`
        })
    }
}

async function mostrarProveedores(req, res) {
    try {
        const proveedores = await proveedores.findAll()
        res.json(proveedores)
    } catch (error) {
        res.json({
            message: 'base de datos vacia'
        })
    }
}
const mostrarProveedor = async (req, res) => {
    try {
        const proveedor = await Proveedor.findOne({ where: { id: peticion.params.id } })
        res.json(proveedor)
    } catch (error) {
        res.json({
            message: `no se pudo registrar el ususario: ${error}`
        })
    }
}
const editarProveedor = async (req, res) => {
    try {

    } catch (error) {

    }

}

const eliminarProveedor = async (req, res) => {
    try {

    } catch (error) {

    }
}
export {
    crearProveedor,
    mostrarProveedores,
    mostrarProveedor,
    editarProveedor,
    eliminarProveedor
}