import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN, ADMIN_USERS, WAITER_MENU, ORDERS } from "../../routes/paths";
import "./LoginFom.scss"
import { requestLogin } from '../../helpers/API_request/userRequest'

export const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errorUser, setErrorUser] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const validateDataUser = (data) => {
        if (data === 'Email and password are required') {
            setErrorMessage('Correo y contraseña requeridos')
            setErrorUser('')
            setErrorPassword('')
        } else if (data === 'Incorrect password') {
            setErrorPassword('Contraseña incorrecta')
            setErrorMessage('')
            setErrorUser('')
        } else if (data === 'Password is too short') {
            setErrorPassword('Contraseña muy corta')
            setErrorMessage('')
            setErrorUser('')
        } else if (data === 'Cannot find user') {
            setErrorUser('No pudo encontrar usuario')
            setErrorPassword('')
        } else if (data === 'Email format is invalid') {
            setErrorUser('Formato de email inválido')
            setErrorPassword('')
        } else{
            switch (data.user.role) {
                case 'admin':
                    navigate(ADMIN_USERS);
                    break;
                case 'waiter':
                    navigate(WAITER_MENU);
                    break;
                case 'chef':
                    navigate(ORDERS)
                    break;
                default:
                    navigate(LOGIN)
            }
        }
    }

    
    const handleSubmit = () => {
        requestLogin(email, password)
//             .then(res => {

//                 if (!res.ok) throw res;
// console.log(res)
//                 return res;
//             })
            .then(res => res.json())
            .catch((error) => {
                console.error(error)
            })
            .then((response) => {
                
                validateDataUser(response)
                localStorage.setItem('Profile', response.user.role)
                localStorage.setItem('IdUser', response.user.id)
                localStorage.setItem('Token', response.accessToken)
            })
            
    }
    return (
        <>
            <form className="loginForm" >
                <article className="loginForm_contentInput">
                    <label className="loginForm_contentInput--label">Correo electrónico</label>
                    <input type="email" size="35" placeholder="Correo electrónico" name="user" onChange={(e) => setUser(e.target.value)} required className="loginForm_contentInput--input" />
                    <span className="loginForm_contentInput--span">{errorUser}</span>
                </article>
                <article className="loginForm_contentInput">
                    <label className="loginForm_contentInput--label">Contraseña</label>
                    <input type="password" size="6" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} className="loginForm_contentInput--input" required />
                    <span className="loginForm_contentInput--span">{errorPassword}</span>
                </article>

                <input className="loginForm_button" type="button" value="INICIAR SESIÓN" onClick={handleSubmit} />

                <span className="loginForm_contentInput--span">{errorMessage}</span>
            </form>
        </>
    )
}
