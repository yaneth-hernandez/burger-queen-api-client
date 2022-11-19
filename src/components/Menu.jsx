import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../routes/paths";

export const Menu = (props) => {
    const navigate = useNavigate()

    const profile = localStorage.getItem('Profile') === 'waiter' ? 'Mesero':''

    const clearSession = () => {
        localStorage.removeItem('Token')
        localStorage.removeItem('Profile')
        navigate(LOGIN)
    }

    return (
        <header>
            <figure>
                <img src={props.logo}></img>
                <figcaption>Burguer Queen</figcaption>
            </figure>
            <figure>
                <i className="bi bi-person-circle"></i>
                <figcaption>{profile}</figcaption>
            </figure>
            <h1>Menú</h1>
            <nav>
                <button onClick={clearSession}>CERRAR SESIÓN</button>
            </nav>
        </header>
    )
}