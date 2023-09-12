import { Link } from "react-router-dom";

export default function Content(){
    return (
        <main>
            <img src="src/assets/img-porto-logo.png" alt="Porto Seguro's logo with background"/>
            <section className="container">
                <h1 className="container__title">Vistoria Bike</h1>
                <p>Sua bicicleta está registrada?</p>
                <Link to="/consulta" className="campos__buttons__layout link-to">Consultar</Link>
                <Link to="/registro" className="campos__buttons__layout link-to">Registrar Bike</Link>
            </section>
        </main>
        
    );
    
}