import React from "react"
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

function Section1(){
    return<>
        <section className="tech">
            <div className="section1_container">
                <div className="row row-cols-1 row-cols-sm-3 g-4" id="row-container-section">
                    <div className="col col-container">
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." id="img1-section1"/>
                            <div className="card-body">
                                <h5 className="card-title">React</h5>
                                <p className="card-text">React permite que os desenvolvedores criem aplicativos web ​​ou interfaces de usuário complexas integrando um pequeno e isolado fragmento de código.</p>
                                <a href='https://www.digitalhouse.com/br/blog/o-que-e-react-programacao' target="_blank" className="btn btn-primary" role="button">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-container">
                        <div className="card">
                            <img src={img2} className="card-img-top" alt="..." id="img2-section1"/>
                            <div className="card-body">
                                <h5 className="card-title">Javascript</h5>
                                <p className="card-text">JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web que podem ser feitas a partir do css e html.</p>
                                <a href='https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript' target="_blank" className="btn btn-primary" role="button">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-container">
                        <div className="card">
                            <img src={img3} className="card-img-top" alt="..." id="img3-section1"/>
                            <div className="card-body">
                                <h5 className="card-title">Html</h5>
                                <p className="card-text">Sigla para HyperText Markup Language — Linguagem de Marcação de Hipertexto —, o HTML é o componente base da web.</p>
                                <a href='https://www.totvs.com/blog/developers/o-que-e-html/' target="_blank" className="btn btn-primary" role="button">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Section1 