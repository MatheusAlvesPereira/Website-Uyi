import './Styles.css'
import Nav from "./components/Banner/nav.jsx"
import Banner from "./components/Banner/Banner.jsx"
import Section1 from "./components/Section1/section1.jsx"
import Section2 from "./components/Section2/section2.jsx"
import Section3 from "./components/Section3/Section3.jsx"
import Carousel from "./components/Carousel/carousel.jsx"
import Projetos from "./components/Projetos/projetos.jsx"
import Footer from "./components/footer/footer.jsx"
import About from "./components/Section4/about.jsx"

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