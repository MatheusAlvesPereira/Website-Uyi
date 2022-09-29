import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './styles/Sass/vendors/main.scss'
import Glob from './glob'
import Login from "./Components/Login/Login.jsx"

export default function App(){
    return<>
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Glob/>}/>
            </Routes>
        </Router>
    </>
}