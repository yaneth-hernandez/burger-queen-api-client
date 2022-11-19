import { useNavigate } from "react-router-dom";
import { LOGIN } from "../routes/paths";
//import { useState } from "react";

export const AdminUsers = (props) => {
    const navigate = useNavigate()
    const profile = localStorage.getItem('Profile') === 'admin' ? 'Admin' : ''

    const clearSession = () => {
        localStorage.removeItem('Token')
        localStorage.removeItem('Profile')
        navigate(LOGIN)
    }

    return (
        <>
            <header>
                <figure>
                    <img src={props.logo}></img>
                    <figcaption>Burguer Queen</figcaption>
                </figure>
                <figure>
                    <i className="bi bi-person-circle"></i>
                    {/* <figcaption>{props.user}</figcaption> */}
                    <figcaption>{profile}</figcaption>

                </figure>
                <nav>
                    <button onClick={clearSession}>CERRAR SESIÓN</button>
                </nav>
            </header>
            <section>
                <button>Crear Usuario</button>

            </section>
        </>
    )
}