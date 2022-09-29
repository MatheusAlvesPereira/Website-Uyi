import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './styles/Sass/vendors/main.scss'
import Nav from "./Components/Nav/nav" 
import Banner from './Components/Banner/Banner'
import Technology from './Components/technology/technology'
import Card from './Components/Card/card'
import Coments from './Components/Coments/Coments'
import Projetos from "./Components/Projetos/projetos"
import Footer from "./Components/footer/footer"
import About from "./Components/about/about"

import Login from "./Components/Login/Login.jsx"

export default function App(){
    return<>
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Nav/>}/>
            </Routes>
        </Router>
    </>
}