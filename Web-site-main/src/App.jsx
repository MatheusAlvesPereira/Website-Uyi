import {
    BrowserRouter as Router, 
    Route, 
    Routes,
    Navigate
} 
from "react-router-dom";
import Login from "./Login/Login.jsx"
import RecuperarSenha from "./RecuprarSenha/RecuprarSenha.jsx"
import Register from "./Register/register.jsx";
import Site from "./site.jsx"
import Profile from "./profile/profile.jsx"
import { AuthContext } from "./Context/Auth.jsx";
import { useState } from "react";

const App = () => {

    const [user, setUser] = useState(null);
    
    const login = (email,password) => {
        console.log("login auth", {email, password});
        setUser({ id:"123", email});
    };

    const logout = () => {
        console.log("logout");
    };

    return(
    <Router>
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            <Routes>
                <Route exact path='/' element={<Site/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/login/Register' element={<Register/>}/>
                <Route exact path='/RecuperarSenha' element={<RecuperarSenha/>}/>
                <Route exact path='/login/Profile' element={<Profile/>}/>            
            </Routes>
        </AuthContext.Provider>    
    </Router>
    )
}

export default App