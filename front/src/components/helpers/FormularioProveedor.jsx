const FormularioProveedor =() =>{
    return(
        <section className="formularioProveedor">
            <h5 className="tituloproveedor">Proveedor</h5>
            <input className="proveedor" type="text" placeholder="NIT"/>
            <input className="proveedor" type="text" placeholder="Telefono"/>
            <input className="proveedor" type="text" placeholder="Direccion"/>
            <input className="proveedor" type="text" placeholder="Correo Electronico"/>
            <input className="proveedor" type="text" placeholder="Representante Legal"/>
            
             <button>Registrar</button> 
            
        </section>
    )
}
export default FormularioProveedor