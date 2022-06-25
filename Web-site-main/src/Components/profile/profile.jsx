import logo from "./logo.png";
import Section2 from "../Components/Section2/section2";
import "./profile.css";
import imgprofile from "./img1.png";

export default function Profile(){
    return<>
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
        </nav>

        <div className="myprofile_container">
            <div className="img_profile_container">
                <img src={imgprofile} className="img_profile" alt=""/>
                <div className="profile_name">My name</div>
            </div>
        </div>

        <Section2/>

        <div className="myplans_container">
            <h2 className="text-plans" id="myplans">Meus Planos</h2>
            <div className="myplans_box">
                <div className="card_myplans">
                    <div className="card-header py-3 text-white bg-primary border-primary">
                        <h4 className="my-0 fw-normal">Gratuito</h4>
                    </div>

                    <div className="card-body-plans" id="myplan">
                        <h1 className="card-title pricing-card-title">R$0<small className="text-muted fw-light">/mês</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Acesso a Plataforma.</li>
                                <li>bootcamps.</li>
                                <li><s>até 5 sites</s></li>
                                <li><s>5 Web Designers</s></li>
                                <li><s>5 Programadores</s></li>
                                <li><s>2 Analistas</s></li>
                            </ul>
                        <button className="w-100 btn btn-lg btn-primary">Assinado</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}