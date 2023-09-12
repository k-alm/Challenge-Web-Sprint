import { Link } from "react-router-dom";

export default function Vistoria(){
    return(
        <main>
            <img src="src/assets/img-porto-logo.png" alt="Porto Seguro's logo with background"/>
            <form className="container">
                <h1 className="container__title">Escaneie o QR Code para iniciar a vistoria</h1>
                <p>QR Code Aqui</p>
                <p>O usuário será redirecionado para a página mobile da vistoria ao escanear</p>      
                <Link className="link-to campos__buttons__layout" to="/vmobile">Continuar</Link>
            </form>
        </main>
    );
}