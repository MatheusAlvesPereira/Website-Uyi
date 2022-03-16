import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login/Login.jsx"
import RecuperarSenha from "./RecuprarSenha/RecuprarSenha.jsx"
import Register from "./Register/register.jsx";
import Site from "./site.jsx"
import Profile from "./profile/profile.jsx"

function App(){
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Site/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/login/Register' element={<Register/>}/>
            <Route exact path='/RecuperarSenha' element={<RecuperarSenha/>}/>
            <Route exact path='/login/Profile' element={<Profile/>}/>            
        </Routes>    
    </BrowserRouter>
    )
}

export default App