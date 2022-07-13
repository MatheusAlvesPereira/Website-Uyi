import React from "react"
import "./banner.css"

function Banner(){
    return<>
        <section className="banner">
            <div className="img-banner"></div>
            <div className="wrapper">
                <label className="title">Escolha o Seu Destino.... <br/>O Visionário, A Technologia.</label>
                <p className="text_banner">Somos A UYi empresa de Tecnologia que presta serviços em diversas áreas em Ti.
                Fazemos o seu site, fornecemos ferramentas para criação de vídeos, banners, flayers e diversos meios de
                comunicação. Business Analysis Inteligence para Sites de grande porte, ou Micro empresas .
                </p>
            </div>

            <svg width="95" height="101" viewBox="0 0 95 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.3535 81.5261L50.4925 88.8205V0H44.5077V88.8205L37.6465 81.5261L33.4147 86.025L47.5001 101L61.5853 86.025L57.3535 81.5261Z" fill="black"/>
            </svg>
        </section>
    </>
}

export default Banner