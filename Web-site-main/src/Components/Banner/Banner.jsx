import React from "react"
import img from "./img.jpg"
import "./banner.css"

function Banner(){
    return<>
        <section className="banner">
            <div className="container-1"id="container-1">
                <img src={img} className="img" alt=""/>

                <label id="texto_h1">Escolha o Seu Destino.... <br/>O Visionário, A Technologia.</label>
                <p className="text_banner">Somos A UYi empresa de Tecnologia que presta serviços em diversas áreas em Ti.
                Fazemos o seu site, fornecemos ferramentas para criação de vídeos, banners, flayers e diversos meios de
                comunicação. Business Analysis Inteligence para Sites de grande porte, ou Micro empresas .
                <a href="#Section2" className="btn btn-primary mx-2" role="button">veja</a>
                </p>
            </div>
        </section>
    </>
}

export default Banner