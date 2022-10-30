import React, { useState } from "react"
import logo from "./logo.png"
import {Link} from "react-router-dom";

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
    
      <nav className={active ? "nav" : "navActive"}>
        <ul className="nav__list">

          <li className="nav__item">
              <a href="#card__price" className="nav__link">Plans</a>
          </li>

          <li className="nav__item">
            <Link to="/login">
              <a className="nav__link">Login</a>
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/login">
              <a className="nav__link">About</a>
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/Register">
              <a className="nav__link">Sign-In</a>
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/login">
              <a className="nav__link">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>   
  </>
}
            
