import React from "react"
import logo from "./logo.png"

function Nav(){
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#"><img src={logo}/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Section2">Planos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Register">Cadastre-se</a>
          </li>
        </ul>
      </div>
    </nav>
  </>
}
              
export default Nav