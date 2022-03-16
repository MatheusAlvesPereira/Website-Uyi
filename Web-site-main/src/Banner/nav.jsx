import logo from "./logo.png"

function Nav(){
  return <>
      <nav className="navbar-expand-md d-flex justify-content-end navbar navbar-dark bg-dark fixed-top">
        
        <div className="logo_container">
           <img src={logo}/>      
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
          </li>

          <li className="nav-item">
              <a href="#about" className='nav-link'>Sobre</a>
          </li>

          <li className="nav-item">
              <a href="#Section2" className='nav-link'>Preço</a>
          </li>

          <li className="nav-item">
              <a href="/login" className='nav-link'>Login</a>
          </li>

          <li className="nav-item">
              <a href="/login/Register" className='nav-link'>Cadastre-se</a>
          </li>
        </ul>
      </nav>
  </>
}
              
export default Nav