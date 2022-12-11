const FormularioProducto =() =>{
    return(
        <section className="formularioProducto">
            <h5 className="tituloproducto">Producto</h5>
            <input className="producto" type="text" placeholder="Nombre"/>
            <input className="producto" type="text" placeholder="Referencia"/>
            <input className="producto" type="text" placeholder="Precio"/>
            <input className="producto" type="text" placeholder="Cantidad"/>
            <input className="producto" type="text" placeholder="Descripcion"/>
            
             <button>Registrar</button>
        </section>
    )
}
export default FormularioProducto