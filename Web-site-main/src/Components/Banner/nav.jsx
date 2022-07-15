import React from "react"
import logo from "./logo.png"

export default function Nav(){
  return <>
    <header className="header">
      <a className="nav__brand" href="#"><img src={logo}/></a>
      <nav className="nav">
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
        <svg width="64" height="50" viewBox="0 0 64 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="64" height="50" fill="url(#pattern0)"/>
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
              