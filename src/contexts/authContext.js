import { createContext, useMemo, useState } from "react";



export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem('User')).user.role)

    const login = (email, password) => {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Request-Method": "POST",
            },
            body: JSON.stringify({
                "email": email.current.value,
                "password": password.current.value
            })

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                localStorage.setItem('User', JSON.stringify(data))
            });
            setAuthenticated(true)
    }
    

    const logOut = () => {
        localStorage.removeItem('User')
        setAuthenticated(false)
    }

    const state = useMemo(
        () => ({
            login,
            logOut,
            isAuthenticated
        }),
        [login,logOut,isAuthenticated]
    );
        return <AuthContext.Provider value={state}>{ children }<AuthContext.Provider/>
};

