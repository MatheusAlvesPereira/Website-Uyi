import React from 'react'
import './styles/Sass/vendors/main.scss'
import Nav from "./Components/Nav/nav" 
import Banner from './Components/Banner/Banner'
import Technology from './Components/technology/technology'
import Card from './Components/Card/card'
import Coments from './Components/Coments/Coments'
import Projetos from "./Components/Projetos/projetos"
import Footer from "./Components/footer/footer"
import About from "./Components/about/about"


export default function App(){
    return<>
        <Nav/>
        <Banner/>
        <Projetos/>
        <Technology/>
        <Card/>
        <Coments/>
        <About/>
        <Footer/>
    </>
}