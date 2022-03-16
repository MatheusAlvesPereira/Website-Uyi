import img1 from "./github.png";
import img2 from "./pinterest.png";

function Footer(){
    return<>
        <div className="footer-container">
            <div className="row">
                <div className="col-lg-11">
                    <p className="dev">Desenvolvido por Matheus Alves.</p>
                </div>

                <div className="col">
                    <a href="https://github.com/MatheusAlvesPereira" target="_blank"><img src={img1}/></a>
                    <a href="https://pin.it/6Z0wa3k" target="_blank"><img src={img2}/></a>
                </div>
            </div>
        </div>
    </>
}   


export default Footer