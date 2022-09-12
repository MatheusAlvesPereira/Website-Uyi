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

      <div className={active ? "nav__active" : "nav__menu"}>
        <div className="menu">
        <svg className="menu menu__icon" onClick={toggleMode} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13Z" fill="black"/>
          <path d="M20.06 11H7.94C7.42085 11 7 11.4209 7 11.94V12.06C7 12.5791 7.42085 13 7.94 13H20.06C20.5791 13 21 12.5791 21 12.06V11.94C21 11.4209 20.5791 11 20.06 11Z" fill="black"/>
          <path d="M20.06 16H3.94C3.42085 16 3 16.4209 3 16.94V17.06C3 17.5791 3.42085 18 3.94 18H20.06C20.5791 18 21 17.5791 21 17.06V16.94C21 16.4209 20.5791 16 20.06 16Z" fill="black"/>
          <path d="M20.06 6H3.94C3.42085 6 3 6.42085 3 6.94V7.06C3 7.57915 3.42085 8 3.94 8H20.06C20.5791 8 21 7.57915 21 7.06V6.94C21 6.42085 20.5791 6 20.06 6Z" fill="black"/>
        </svg>
        </div>
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
            
