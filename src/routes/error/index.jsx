import { Link } from "react-router-dom"
import "./error404.css"

export default function Error404(){
    document.body.classList.add('stop-animation');
    return(
        <main className="error-main">
            <section className="error-section">
                <img className="image" src="src/assets/bike-erro.png" alt="Error 404" />
                <div className="error-container">
                    <h1 className="error-title principal">404...</h1>
                    <h2 className="error-title secundario">Caminho errado!</h2>
                    <h2 className="error-title secundario">Não encontramos essa página.</h2>
                    <Link className="campos__buttons__error" to="/">Volte para o início</Link>
                </div>
            </section>
        </main>
    )
}