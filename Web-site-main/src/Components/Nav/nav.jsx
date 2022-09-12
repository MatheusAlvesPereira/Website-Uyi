import React, { useState } from "react"
import logo from "./logo.png"

export default function Nav(){

  const [ active , setMode] = useState(!false);
  const toggleMode = () => {
    setMode(!active)
    console.log('clickou')
  }
  
  return <>
    <header className="header">
      <a className="nav__brand" href="#"><img src={logo}/></a>

      <div onClick={toggleMode} className={active ? "nav__active" : "nav__menu"}>
        <div className="menu"></div>
      </div>
    
      <nav className={active ? "navActive" : "nav"}>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#about">About</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#Section2">Plans</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/login">Login</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/Register">Sign-in</a>
          </li>
        </ul>
      </nav>
    </header>   
  </>
}
            
