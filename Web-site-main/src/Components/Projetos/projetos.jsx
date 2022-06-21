import React from "react"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"


export default function Projetos(){
    return<>
    <div className="project-bg">
        <div className="project__card">
            <div className="tech__card">
                <div className="card">
                    <img src={img1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Tecnologias que Utilizadmos:</h5>
                        <p className="card-text">Utilizamos css,Javascript,html e alguns frameworks como: boostrap.</p>
                        <a href="#" className="btn btn-primary" role="button" data-bs-toggle="button">Saiba Mais</a>
                    </div>
                </div>
            </div>
            <div className="tech__card">
                <div className="card">
                    <img src={img2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Nossos Programadores</h5>
                        <p className="card-text">Nossas programadores são especialistas em Javascript, css e backend para banco de dados.</p>
                        <a href="#" className="btn btn-primary" role="button" data-bs-toggle="button">Saiba Mais</a>
                    </div>
                </div>
            </div>
            <div className="tech__card">
                <div className="card">
                    <img src={img3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Designers</h5>
                        <p className="card-text">São responsáveis pelo nosso front-end executam um Ui excelente para negócios.</p>
                        <a href="#" className="btn btn-primary" role="button" data-bs-toggle="button">Saiba mais</a>
                    </div>
                </div>
            </div>
            <div className="col col-container">
                <div className="card">
                    <img src={img4} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Analistas</h5>
                        <p className="card-text">Toda nossa base de negócios, com o Buiness Analsys conseguimos um marketing objetivo.</p>
                        <a href="#" className="btn btn-primary" role="button" data-bs-toggle="button">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}