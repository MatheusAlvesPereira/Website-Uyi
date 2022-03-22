import react, { useState, useEffect, createContext} from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);
        
    const login = (email,password) => { 
        console.log("login auth", {email, password});

        // Api para criar uma sessão 
        const loggedUser = {
            id: "123",
            email,
        }

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if (password === "secret", email === "teste@gmail.com") {
            setUser(loggedUser);
            navigate('/login/Profile');
        }

        else{
            alert("Usuário ou senha inválidos!");
        }
    };

    const logout = () => {
        console.log("logout");
        setUser(null);
        localStorage.removeItem('user');
        navigate("/login")
    };


    return(
        <AuthContext.Provider value={{authenticated: !!user, user, login, loading, logout}}>
            {children}
        </AuthContext.Provider>
    ); 
        
};