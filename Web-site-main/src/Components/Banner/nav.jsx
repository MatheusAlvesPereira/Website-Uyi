import React from "react"
import logo from "./logo.png"
import { useRef } from "react";

export default function Nav(){

  const navRef = useRef();

  const shownavbar = () => {
    navRef.current.classList.toggle('nav_active');
  }

  return <>
    <header className="header">
      <a className="nav__brand" href="#"><img src={logo}/></a>
      <nav className="nav" id="Nav">
        <svg id="close" className="close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2ZM14.71 13.29C14.8037 13.383 14.8781 13.4936 14.9289 13.6154C14.9797 13.7373 15.0058 13.868 15.0058 14C15.0058 14.132 14.9797 14.2627 14.9289 14.3846C14.8781 14.5064 14.8037 14.617 14.71 14.71C14.617 14.8037 14.5064 14.8781 14.3846 14.9289C14.2627 14.9797 14.132 15.0058 14 15.0058C13.868 15.0058 13.7373 14.9797 13.6154 14.9289C13.4936 14.8781 13.383 14.8037 13.29 14.71L12 13.41L10.71 14.71C10.617 14.8037 10.5064 14.8781 10.3846 14.9289C10.2627 14.9797 10.132 15.0058 10 15.0058C9.86799 15.0058 9.73729 14.9797 9.61543 14.9289C9.49357 14.8781 9.38297 14.8037 9.29 14.71C9.19628 14.617 9.12188 14.5064 9.07111 14.3846C9.02034 14.2627 8.99421 14.132 8.99421 14C8.99421 13.868 9.02034 13.7373 9.07111 13.6154C9.12188 13.4936 9.19628 13.383 9.29 13.29L10.59 12L9.29 10.71C9.1017 10.5217 8.99591 10.2663 8.99591 10C8.99591 9.7337 9.1017 9.4783 9.29 9.29C9.47831 9.1017 9.7337 8.99591 10 8.99591C10.2663 8.99591 10.5217 9.1017 10.71 9.29L12 10.59L13.29 9.29C13.4783 9.1017 13.7337 8.99591 14 8.99591C14.2663 8.99591 14.5217 9.1017 14.71 9.29C14.8983 9.4783 15.0041 9.7337 15.0041 10C15.0041 10.2663 14.8983 10.5217 14.71 10.71L13.41 12L14.71 13.29Z" fill="black"/>
        </svg>

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

      <svg onClick={shownavbar} id="Menu" className="nav__menu" width="42" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="42" height="33" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_242_9" transform="translate(0 -0.108974) scale(0.0152778 0.0199786)"/>
        </pattern>
        <image id="image0_242_9" width="120" height="120" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAqVJREFUeF7t2kFWAyEABNFwcvXk4yp75lUCNbxynQ5Nf1npePVz9ALj6Nt1uVfAh/8SBBzw4Qscfr1ecMCHL3D49XrBAR++wOHX6wUHfPgCh1+vFxzw4Qscfr1ecMCHL3D49aZf8HVdl3mLMcb0Xcz3+HS36VEC/vT0a74v4DU7bzsl4G3Trzk44DU7bztlGnhbww5GCwSM5vOHA/YboYYBo/n84YD9RqhhwGg+fzhgvxFqOA18XdcPOunL4THG35ePeOTX3wHujw0PJA74gWh3Kgd8Z60HfjbgB6LdqXwH+PfOF6/+7BhD3W/1Hu/zpoF3FexctkDAbD99OmA9ESsYMNtPnw5YT8QKBsz206cD1hOxgtPA/V80G3pXOuBdyy86N+BFQ+86JuBdyy86N+BFQ+86Zhp4V8HOZQsEzPbTpwPWE7GCAbP99OmA9USsYMBsP306YD0RKxgw20+fDlhPxAoGzPbTpwPWE7GCAbP99OmA9USsYMBsP306YD0RKxgw20+fDlhPxAoGzPbTpwPWE7GCAbP99OmA9USsYMBsP306YD0RKxgw20+fDlhPxAoGzPbTpwPWE7GCAbP99OmA9USsYMBsP306YD0RKxgw20+fDlhPxAoGzPbTpwPWE7GCAbP99OmA9USsYMBsP306YD0RKxgw20+fDlhPxAoGzPbTpwPWE7GCAbP99OmA9USsYMBsP306YD0RKxgw20+fDlhPxAoGzPbTpwPWE7GCAbP99OmA9USsYMBsP306YD0RKxgw20+fDlhPxAoGzPbTpwPWE7GCAbP99OmA9USsYMBsP306YD0RKxgw20+fDlhPxAoGzPbTpwPWE7GCAbP99OmA9USsYMBsP306YD0RKxgw20+fDlhPxAoGzPbTpwPWE7GC/+M1QHl+Pw/UAAAAAElFTkSuQmCC"/>
        </defs>
      </svg>
    </header>   
  </>
}
              