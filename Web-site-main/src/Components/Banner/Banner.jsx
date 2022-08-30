import React from "react"
import "./banner.css"

export default function Banner(){
    return<>
        <section className="banner">
            <div className="banner__img"></div>
            <div className="banner__wrapper">
                <label className="banner__title">Tecnology in<br/>your Buiness</label>
                <p className="banner__text">Employers designer<br/>
                    buiness analysys 
                    back end support.
                </p>
            </div>

            <svg className="banner__arrow" width="95" height="101" viewBox="0 0 95 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.3535 81.5261L50.4925 88.8205V0H44.5077V88.8205L37.6465 81.5261L33.4147 86.025L47.5001 101L61.5853 86.025L57.3535 81.5261Z" fill="black"/>
            </svg>  

            <div className="line">  
                <svg width="224" height="3205" viewBox="0 0 224 3205" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="XMidYMax meet">
                    <path d="M131.5 0C131.5 378 46.8333 531.5 4.5 561L131.5 645.5L217 561H131.5V3204.5" stroke="#0993F5" stroke-width="5"/>
                </svg>
            </div> 
        </section>
    </>
}