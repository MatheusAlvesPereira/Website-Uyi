import img1 from "./github.png";
import img2 from "./Figma.png";

export default function Footer(){
    return<>
        <div className="footer">
            <div className="row">
                <div className="col-lg-11">
                    <p className="dev">Desenvolvido por Matheus Alves.</p>
                </div>

                <div className="col">
                    <a href="https://github.com/MatheusAlvesPereira" target="_blank"><img src={img1}/></a>
                    <a href="https://www.figma.com/file/irUs7TAKEdt3DKL8ancpAL/WebSiteDesignUYI?node-id=0%3A1" target="_blank"><img src={img2}/></a>
                </div>
            </div>
        </div>
    </>
}   