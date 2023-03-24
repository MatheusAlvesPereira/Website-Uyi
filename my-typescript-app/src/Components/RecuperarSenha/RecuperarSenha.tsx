import img1 from "./img1.png"
import "./RecuperarSenha.css"
import {Link} from 'react-router-dom'

export default function RecuperarSenha(){
    return(
        <div className="d-flex align-itens-center text-center form-container">
            <form className="form-signin">
                <img src={img1} alt="" />
                <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
                    <label htmlFor="floatingInput">E-mail</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary btn_form mt-2" type="submit">Enviar</button>
                <div className="login-links mt-5">
                    <Link to="/login" className="mx-2" href="">Já tenho uma conta.</Link>
                </div>

                <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Matheus Alves.</p>
            </form>
        </div>
    )
}