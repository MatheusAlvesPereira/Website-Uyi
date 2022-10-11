import React from "react"
import img1 from "./img1.png"
import "./register.css"
import {Link} from 'react-router-dom'

export default function Register(){
    return(
        <div className="d-flex align-itens-center text-center form-container">
            <form action="" className="form-signin" method="POST">
                <img src={img1} alt="" />
                <h1 className="h3 mb-3 fw-normal">Crie Sua Conta</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" required/>
                    <label for="floatingInput">E-mail</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" required/>
                    <label for="floatingPassword">Senha</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary btn_form mt-2" type="submit">Criar Conta</button>
                <div className="login-links mt-5">
                    <Link to="/login" className="mx-2" href="">Já tenho uma conta.</Link>
                </div>

                <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Matheus Alves.</p>
            </form>
        </div>
    )
}