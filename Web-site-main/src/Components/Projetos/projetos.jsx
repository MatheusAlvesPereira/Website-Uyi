import React from "react"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"


export default function Projetos(){
    return<>
        <section className="project">
            <div className="project__card">
                <div className="project__content">
                    <div className="project__body">
                        <h5 className="project__title">Tecnologias que Utilizamos:</h5>
                        <p className="project__text">Utilizamos css,Javascript,html e alguns frameworks como: boostrap.</p>
                    </div>
                    <img src={img1} className="project__img" alt="..."/>
                </div>
                <div className="project__content">
                    <div className="project__body">
                        <h5 className="project__title">Nossos Programadores</h5>
                        <p className="project__text">Nossas programadores são especialistas em Javascript, css e backend para banco de dados.</p>
                    </div>
                    <img src={img2} className="project__img" alt="..."/>
                </div>
                <div className="project__content">
                    <div className="project__body">
                        <h5 className="project__title">Designers</h5>
                        <p className="project__text">São responsáveis pelo nosso front-end executam um Ui excelente para negócios.</p>
                    </div>
                    <img src={img3} className="project__img" alt="..."/>
                </div>
                <div className="project__content">
                    <div className="project__body">
                        <h5 className="project__title">Analistas</h5>
                        <p className="project__text">Toda nossa base de negócios, com o Buiness Analsys conseguimos um marketing objetivo.</p>
                    </div>
                    <img src={img4} className="project__img" alt="..."/>
                </div>
            </div>
        </section>
    </>
}