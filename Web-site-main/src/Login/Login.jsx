import img1 from "./img1.png"
import "./login.css"
import {Link} from 'react-router-dom'
import React, {useState, useContext} from 'react';
import { AuthContext } from "../Context/Auth";

const Login = () => {

    const {authenticated , login} = useContext(AuthContext);

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    const handleSubimit = (event) => {
        event.preventDefault();

        console.log("submit", {email,password});

        login(email,password);
    };

    return(
        <div className="d-flex align-itens-center text-center form-container">
            <form className="form-signin" onSubmit={handleSubimit}>
                <img src={img1} alt="" />
                <h1 className="h3 mb-3 fw-normal">Login</h1>
                <p>{String(authenticated)}</p>

                <div className="form-floating">
                    <input 
                     type="email"
                     className="form-control" 
                     id="floatingInput"
                     value={email}
                     onChange={(event)=> setEmail(event.target.value)}
                     />
                    <label>E-mail</label>
                </div>

                <div className="form-floating">
                    <input 
                     type="password" 
                     className="form-control" 
                     id="floatingPassword"
                     value={password} 
                     onChange={(event) => setPassword(event.target.value)} 
                    />
                    <label>Senha</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Acessar</button>
                <div className="login-links mt-5">
                    <Link to="/RecuperarSenha" className="mx-2" href="">Esqueci minha senha</Link>
                    <Link to="/login/Register"  className="mx-2" href="">Criar uma Conta</Link>
                </div>

                <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Matheus Alves.</p>
            </form>
        </div>
    ) 
};

export default Login