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
import {AuthProvider} from "./Context/Auth.jsx"

const App = () => {    
    return(
    <Router>
        <AuthProvider>
            <Routes>
                <Route exact path='/' element={<Site/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/login/Register' element={<Register/>}/>
                <Route exact path='/RecuperarSenha' element={<RecuperarSenha/>}/>
                <Route exact path='/login/Profile' element={<Profile/>}/>            
            </Routes>
        </AuthProvider>    
    </Router>
    )
}

export default App