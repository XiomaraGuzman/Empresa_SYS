import Header from "../layout/Header";
import {useNavigate} from "react-router-dom"
import axios from "axios";

const apiInicio = "http://localhost:3001/inicio";

const inicioPagina = () => {
    const navigate = useNavigate()
    axios.post(apiInicio)
    navigate('/inicio')

    return(
        <section>
            <Header/>
        </section>
    );
}
export default inicioPagina