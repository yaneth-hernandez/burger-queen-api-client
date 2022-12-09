import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../../routes/paths.js";
import logo from '../../../assets/Logo.png'
import '../../HeaderAdmin/HeaderAdmin.scss'

export const HeaderWaiter = () => {
    const navigate = useNavigate()

    const profile = localStorage.getItem('Profile') === 'waiter' ? 'Mesero':''

    const clearSession = () => {
        localStorage.removeItem('Token')
        localStorage.removeItem('Profile')
        navigate(LOGIN)
    }

    const showNavigationBar = () => {
        const navBar = document.getElementById('admin_navBar_id')
        navBar.classList.toggle('admin_navBar_view')
   }

    return (
        <header className="admin_container">
        <figure className="admin_containerLogo">
            <img className="admin_containerLogo--img" src={logo} alt="logo"></img>
            <figcaption className="admin_containerLogo--text">Burguer Queen</figcaption>
        </figure>
        <figure className="admin_containerIcon" onClick={showNavigationBar}>
            <i className="bi bi-person-circle" ></i>
            <figcaption className="admin_containerIcon--text">{profile}</figcaption>
        </figure>
        <nav className="admin_navBar" id="admin_navBar_id">
            <article>
            <button className="itemNavBar" data-nav="users" ><i className="bi bi-person-gear"><br/></i>Menú</button>
            <button>Desayuno</button>
            <button>Almuerzos/cena</button>
            </article>
            <button className="itemNavBar" data-nav="products" ><i className="bi bi-house-gear"><br/></i>Estado de pedido</button>
            <button className="itemNavBar" onClick={clearSession}><i className="bi bi-box-arrow-right"><br/></i>Cerrar Sesión</button>
        </nav>
    </header>
    )
}