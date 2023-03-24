import img1 from "./img1.png"
import "./login.css"
import {Link} from 'react-router-dom'

const Login = () => {
    return(
        <div className="d-flex align-itens-center text-center form-container">
            <form action="#" className="form-signin">
                <img src={img1} alt="" />
                <h1 className="h3 mb-3 fw-normal">Login</h1>

                <div className="form-floating">
                    <input 
                     type="email"
                     className="form-control" 
                     id="floatingInput"
                     />
                    <label>E-mail</label>
                </div>

                <div className="form-floating">
                    <input 
                     type="password" 
                     className="form-control" 
                     id="floatingPassword"
                    />
                    <label>Senha</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Acessar</button>
                <div className="login-links mt-5">
                    <Link to="/RecuperarSenha" className="mx-2" href="">Esqueci minha senha</Link>
                    <Link to="/Register"  className="mx-2" href="">Criar uma Conta</Link>
                </div>

                <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Matheus Alves.</p>
            </form>
        </div>
    )
};

export default Login