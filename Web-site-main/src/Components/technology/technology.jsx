import React from "react"
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

export default function technology(){
    return<>
        <section className="tech">
            <div className="tech__container">

                <div className="tech__card">
                    <img src={img1} className="tech__img" alt="..." id="img1-section1"/>
                    <div className="tech__body">
                        <h5 className="tech__title">React</h5>
                        <p className="tech__text">React permite que os desenvolvedores criem aplicativos web ​​ou interfaces de usuário complexas integrando um pequeno e isolado fragmento de código.</p>
                        <a href='https://www.digitalhouse.com/br/blog/o-que-e-react-programacao' target="_blank" role="button">Saiba Mais</a>
                    </div>
                </div>

                <div className="tech__card">
                    <img src={img2} className="tech__img" alt="..." id="img2-section1"/>
                    <div className="tech__body">
                        <h5 className="tech__title">Javascript</h5>
                        <p className="tech__text">JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web que podem ser feitas a partir do css e html.</p>
                        <a href='https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript' target="_blank" role="button">Saiba Mais</a>
                    </div>
                </div>

                <div className="tech__card">
                    <img src={img3} className="tech__img" alt="..." id="img3-section1"/>
                    <div className="tech__body">
                        <h5 className="tech__title">Html</h5>
                        <p className="tech__text">Sigla para HyperText Markup Language — Linguagem de Marcação de Hipertexto —, o HTML é o componente base da web.</p>
                        <a href='https://www.totvs.com/blog/developers/o-que-e-html/' target="_blank" role="button">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}
