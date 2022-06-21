import React from 'react'
import './Styles.css'
import Nav from "./Components/Banner/nav" 
import Banner from './Components/Banner/Banner'
import Section1 from "./Components/Section1/section1"
import Section2 from "./Components/Section2/section2"
import Section3 from './Components/Section3/Section3'
import Carousel from "./Components/Carousel/carousel"
import Projetos from "./Components/Projetos/projetos"
import Footer from "./Components/footer/footer"
import About from "./Components/Section4/about"

export default function App(){
    return<>
    <Nav/>
    <Banner/>
    <Section1/>
    <Carousel/>
    <Projetos/>
    <Section2/>
    <Section3/>
    <About/>
    <Footer />
    </>
}