import react, { useContext } from 'react'
import { AuthContext } from '../Context/Auth';
import logo from "./logo.png"

export default function Profile(){

    const {authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };
 
    return<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#"><img src={logo}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#Section2">Planos</a>
                </li>
                <li className="nav-item">
                    <a onClick={handleLogout} href="/login" className='nav-link'>Sair</a>
                </li>
                <li className="nav-item">
                    <a href="#" className='nav-link'>{String(authenticated)}</a>
                </li>
                </ul>
            </div>
        </nav>
    </>
}