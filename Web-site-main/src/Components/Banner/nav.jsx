import logo from "./logo.png"

function Nav(){
  return <>
    <nav className="navbar-expand-md d-flex justify-content-end navbar navbar-dark bg-dark fixed-top">
      <a href="#" className="nav-bar-brand">
        <img src={logo}/>
      </a>

      <button type="button" data-toggle="collapse" data-target="#navbarNav" 
      class="navbar-toggler" 
      aria-bs-controls="navbarNav"
      aria-bs-expanded="false"
      aria-label="Toggle navigation">
        Menu
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
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
      </div>
    </nav>
  </>
}
              
export default Nav