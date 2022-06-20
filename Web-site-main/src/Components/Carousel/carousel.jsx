import React from "react"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"

function Carousel(){ 
    return<>
        <section id="section_carousel">
            <div id="carouselExampleCaptions" className="carousel slide carousel_section" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="" id="img1"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-aplicativos">Aplicativos</h2>
                            <p>Aplicativos para sua empresa, e-commerce ou site.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="" id="img2"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-time">Conheça nossos desenvolvedores</h2>
                            <p>Conheça nosso time de desenvolvedores e programadores</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt=""id="img3"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-buiness">Buiness Analysis da sua empresa</h2>
                            <p>Busque um profissional nível Analista</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    </>
}


export default Carousel