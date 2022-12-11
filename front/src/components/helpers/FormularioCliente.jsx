const FormularioCliente =() =>{
    return(
        <section className="formulariocliente">
            <h5 className="titulocliente">Cliente</h5>
            <input className="cliente" type="text" placeholder="Nombre"/>
            <input className="cliente" type="text" placeholder="Documento"/>
            <input className="cliente" type="text" placeholder="Correo Electronico"/>
            <input className="cliente" type="text" placeholder="Direccion"/>
            <input className="cliente" type="text" placeholder="Telefono"/>
            <input className="cliente" type="text" placeholder="Barrio"/>

             <button>Registrar</button> 
            
        </section>
    )
}
export default FormularioCliente