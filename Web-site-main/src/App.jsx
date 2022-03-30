import React, {useContext} from "react";
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
import { AuthProvider, AuthContext } from "./Context/Auth.jsx"

const App = () => {    

    const Private = ({children}) =>{
        const {authenticated , loading} = useContext(AuthContext);


        if(loading){
            return<div className="carregando"><h1>loading....</h1></div>
        }


        if(!authenticated){
            return <Navigate to="/login" />;
        }

        else{
            return children;
        }
    };

    return(
    <Router>
        <AuthProvider>
            <Routes>
                <Route exact path='/' element={<Site/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/Register' element={<Register/>}/>
                <Route exact path='/RecuperarSenha' element={<RecuperarSenha/>}/>
                <Route exact path='/login/Profile' element={<Private><Profile/></Private>}/>            
            </Routes>
        </AuthProvider>    
    </Router>
    )
}

export default App