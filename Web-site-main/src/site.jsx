import './Styles.css'
import Nav from './Banner/nav.jsx' 
import Banner from './Banner/Banner.jsx'
import Section1 from "./Section1/section1.jsx"
import Section2 from "./Section2/section2.jsx"
import Section3 from './Section3/Section3.jsx'
import Carousel from "./Carousel/carousel.jsx"
import Projetos from "./Projetos/projetos.jsx"
import Footer from "./footer/footer.jsx"
import About from "./Section4/about.jsx"

export default function Site(){
    return<>
    <Nav />
    <Banner />
    <Section1  />
    <Carousel />
    <Projetos />
    <Section2 />
    <Section3 />
    <About/>
    <Footer />
    </>
}