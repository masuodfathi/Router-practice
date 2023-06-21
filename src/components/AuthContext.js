import { createContext, useState , useContext} from "react";

const Authcon = createContext(null);

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [theme,setTheme] = useState('light');

    const switchTheme = () =>{
        setTheme(theme==='light'? 'dark' : 'light')
    }

    const login = (user) =>{
        setUser(user);
    }

    const logout =() =>{
        setUser(null);
    }

    return(
        <Authcon.Provider value={{user,login,logout,theme,switchTheme}}>
            {children}
        </Authcon.Provider>
    )
}

export const useAuth = () =>{
    return useContext(Authcon);
}