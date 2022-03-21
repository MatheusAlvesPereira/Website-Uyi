import react, {createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = () => {
    return(
        <AuthContext.Provider value={{authenticated: !!user, user, login , logout}}>
            
        </AuthContext.Provider>
    )
}