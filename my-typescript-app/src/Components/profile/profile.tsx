import logo from "./logo.png";
import "./profile.css";
import imgprofile from "./img1.png";
import Footer from "../footer/footer";

export default function Profile(){
    return<>
        <div className="myprofile_container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#"><img src={logo}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#myplans">Planos</a>
                    </li>
                    <li className="nav-item">
                        <a href="/login" className='nav-link'>Sair</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className='nav-link'></a>
                    </li>
                    </ul>
                </div>

                <div className="myprofile_container">
                <div className="img_profile_container">
                    <img src={imgprofile} className="img_profile" alt=""/>
                    <div className="profile_name">My name</div>
                </div>
            </div>

            </nav>
            <div className="myplans_container">
                <h2 className="text-plans" id="myplans">Meus Planos</h2>
            
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" id="row-price">
                    <div className="col" id="card-price1">
                        <div className="card mb-4 rounded-3 shadow-sm" id="card-container3">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Gratuito</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">R$0<small className="text-muted fw-light">/mês</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                <li>Acesso a Plataforma.</li>
                                <li>bootcamps.</li>
                                <li><s>até 5 sites</s></li>
                                <li><s>5 Web Designers</s></li>
                                <li><s>5 Programadores</s></li>
                                <li><s>2 Analistas</s></li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">Assinado</button>
                            </div>
                        </div>
                    </div>

                    <div className="col" id="card-price2">
                        <div className="card mb-4 rounded-3 shadow-sm" id="card-container2">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Profissional</h4>
                            </div>
                            <div className="card-body" id="card-body2">
                                <h1 className="card-title pricing-card-title">R$299<small className="text-muted fw-light">/mês</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Acesso a Plataforma.</li>
                                    <li>bootcamps.</li>
                                    <li>até 5 sites</li>
                                    <li>5 Web Designers</li>
                                    <li><s>5 Programadores</s></li>
                                    <li><s>2 Analistas</s></li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Assine já</button>
                            </div>
                        </div>
                    </div>

                    <div className="col" id="card-price3">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary" id="card-container3">
                            <div className="card-header py-3 text-white bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Empresarial</h4>
                            </div>

                            <div className="card-body" id="card-body3">
                                <h1 className="card-title pricing-card-title">R$599<small className="text-muted fw-light">/mês</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Acesso a Plataforma.</li>
                                    <li>bootcamps.</li>
                                    <li>até 5 sites</li>
                                    <li>5 Web Designers</li>
                                    <li>5 Programadores</li>
                                    <li>2 Analistas</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Assine já</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}