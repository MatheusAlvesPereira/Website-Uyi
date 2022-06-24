import React from "react"
import img1 from "./img1.png"
import "../Coments/Coments.css"

export default function Coments(){
    return<>
        <section id="section_coments">
            <div className="bg_section3">
                <div className="row">
                    
                    <div className="col-md-4">
                        <img className="img-coments" src={img1} alt=""/>

                        <p className="name">Rafael Silva</p>
                        <p className="text">Comprei o plano Empresarial. Gostei muito
                        minha empresa cresceu demais foi incrivel a criação de sites
                        feita pelos funcionários. 
                        </p>
                    </div>

                    <div className="col-md-4">
                        <img className="img-coments" src={img1} alt=""/>

                        <p className="name">Carla Sales</p>
                        <p className="text">Comecei com o plano Gratuito e consegui desenvolver meu primeiro site
                        depois assinei o plano Analista, o pessoal é bem bacana aprendi muito e fiz vários projetos.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <img className="img-coments" src={img1} alt=""/>

                        <p className="name">Rodrigo Raia</p>
                        <p className="text">gostei muito do plano Gratuito, em breve vou assinar o plano Analista 
                        vale muito o a pena! o pessoal é bem bacana quando ensina na plataforma de cursos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
}