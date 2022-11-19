import React, { useRef, useState, useEffect } from "react";
// import env from "react-dotenv"
import { useNavigate } from "react-router-dom";
import { LOGIN, ADMIN_USERS, MENU, ORDERS } from "../../routes/paths";
import "./LoginFom.scss"

export const LoginForm = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errorUser, setErrorUser] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
// 
     const validateDataUser = (data) => {
        // if(data === ''){
        //     setErrorMessage('Correo y contraseña requeridos')
        //     setErrorUser('')
        //     setErrorPassword('')
        // }else if (data === 'Incorrect password'){
        //     setErrorPassword('Contraseña incorrecta')
        //     setErrorMessage('')
        //     setErrorUser('')
        // }
        
        if (data === 'Cannot find user'){
            setErrorUser('No pudo encontrar usuario')
            setErrorPassword('')
        }else if (data === 'Email format is invalid'){
            setErrorUser('Formato de email inválido')
            setErrorPassword('')
        }else{
             switch (data.user.role) {
            case 'admin':
                navigate(ADMIN_USERS);
                break;
            case 'waiter':
                navigate(MENU);
                break;
            case 'chef':
                navigate(ORDERS)
                break;
            default:
                navigate(LOGIN)
        }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Request-Method": "POST",
            },
            body: JSON.stringify({
                "email": user,
                "password": password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('mensaje del then',data)
                validateDataUser(data)
                localStorage.setItem('Profile', data.user.role)
                localStorage.setItem('Token', data.accessToken)
            })
            .catch((err) => {
                console.log('Mensaje del catch',err)
                // validateDataUser(err)
                // setErrorMessage('Correo y contraseña requeridos')
                // setErrorUser('')
                // setErrorPassword('')
            })
    }
    return (
        <>
            {/* <figure className="Login-content-logo">
                <img className="Login-img-logo" src={props.logo} alt="Logo burguer queen" />
                <figcaption className="Login-text-img">Burguer Queen</figcaption>
            </figure> */}
            <form className="loginForm" onSubmit={(e)=>handleSubmit(e)}>
                <article className="loginForm_contentInput">
                    <label className="loginForm_contentInput--label">Correo electrónico</label>
                    <input type="email" size="35" placeholder="Correo electrónico" name="user" onChange={(e) => setUser(e.target.value)} required className="loginForm_contentInput--input"/>
                    <span className="loginForm_contentInput--span">{errorUser}</span>
                </article>
                <article className="loginForm_contentInput">
                    <label className="loginForm_contentInput--label">Contraseña</label>
                    <input type="password" size="35" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} className="loginForm_contentInput--input" required />
                    <span>{errorPassword}</span>
                </article>
               {/*  <article > */}
                    <input className="loginForm_button" type="submit" value="INICIAR SESIÓN" />
                {/*  </article > */}
                <span>{errorMessage}</span>
            </form>
        </>
    )
}
