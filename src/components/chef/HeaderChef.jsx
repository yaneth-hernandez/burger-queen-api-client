import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN} from "../../routes/paths.js";
import logo from '../../assets/Logo.png'
import '../HeaderAdmin/HeaderAdmin.scss'
import '../waiter/HeaderWaiter/HeaderWaiter.scss'

export const HeaderChef = () => {

    const navigate = useNavigate()
    const profile = localStorage.getItem('Profile') === 'chef' ? 'Jefe de cocina' : ''

    const clearSession = () => {
        localStorage.removeItem('Token')
        localStorage.removeItem('Profile')
        localStorage.removeItem('IdUser')
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
                <button className="itemNavBar" onClick={clearSession}><i className="bi bi-box-arrow-right"><br /></i>Cerrar Sesión</button>
            </nav>
        </header>
    )
}