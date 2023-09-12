import { Link } from "react-router-dom";
import Inputs from "../../components/Inputs";

export default function Consulta(){
    return(
        <main>
            <img src="src/assets/img-porto-logo.png" alt="Porto Seguro's logo with background"/>
            <form className="container">
                <h1>Consultar Bike</h1>
                <h1 className="container__title">Insira o número de série da bike</h1>
                <div className="campos">
                    <Inputs class="campos__texto" placeholder="Digite o número de série" label="Número de série" type="text"/>
                </div>
                <button className="link-to-consulta campos__buttons__layout" to="/vistoria">Iniciar Vistoria</button>              
                <Link className="link-to-consulta campos__buttons__layout" to="/">Voltar</Link>
            </form>
        </main>
    );
}