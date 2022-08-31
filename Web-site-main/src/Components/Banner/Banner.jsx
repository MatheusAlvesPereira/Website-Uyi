import React from "react"

export default function Banner(){

    let path = document.querySelector('path');
    let pathlengh = document.querySelector('path')

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
                <svg className="line__img" width="317" height="4597" viewBox="0 0 317 4597" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M187.282 0C187.282 542.258 65.7608 762.461 5 804.78L187.282 925.999L310 804.78H187.282V4597" stroke="#0993F5" stroke-width="5"/>
                </svg>
            </div> 
        </section>
    </>
}