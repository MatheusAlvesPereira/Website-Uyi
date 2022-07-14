import React from "react"
import logo from "./logo.png"

export default function Nav(){
  return <>
    <header>
      <nav className="nav">
        <a className="nav__brand" href="#"><img src={logo}/></a>

        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#about">Sobre</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#Section2">Planos</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/login">Login</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/Register">Cadastre-se</a>
          </li>
        </ul>
      </nav>
    </header>
  </>
}
              