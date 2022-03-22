import react, { useContext } from 'react'
import { AuthContext } from '../Context/Auth';
import logo from "./logo.png"

export default function Profile(){

    const {authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };
 
    return<>
        <nav className="navbar-expand-md d-flex justify-content-start navbar navbar-dark bg-dark fixed-top">
        
            <div className="logo_container_profile">
                <img src={logo}/>
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>

                <li className="nav-item">
                    <a href="#about" className='nav-link'>Planos</a>
                </li>

                <li className="nav-item">
                    <a onClick={handleLogout} href="/login" className='nav-link'>Sair</a>
                </li>

                <li className="nav-item">
                    <a href="#" className='nav-link'>{String(authenticated)}</a>
                </li>
            </ul>
       </nav>
    </>
}