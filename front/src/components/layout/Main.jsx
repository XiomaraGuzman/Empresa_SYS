import FormularioCliente from "../helpers/FormularioCliente";
import FormularioProducto from "../helpers/FormularioProducto";
import FormularioProveedor from "../helpers/FormularioProveedor";

const Main =()=>{
    return(
        <section className="section">
          <FormularioCliente/>
          <FormularioProducto/>
          <FormularioProveedor/>
          
        </section>
    )
}
export default Main