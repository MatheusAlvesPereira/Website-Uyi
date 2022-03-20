
import logo from "./logo.png"

export default function Profile(){
    return<>
        <nav className="navbar-expand-md d-flex justify-content-start navbar navbar-dark bg-dark fixed-top">
        
            <div className="logo_container">
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
                    <a href="#Section2" className='nav-link'>Sair</a>
                </li>
            </ul>
       </nav>
    </>
}