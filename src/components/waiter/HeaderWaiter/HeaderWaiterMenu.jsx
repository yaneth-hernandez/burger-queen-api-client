import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN, WAITER_MENU, WAITER_STATUS } from "../../../routes/paths.js";
import logo from '../../../assets/Logo.png'
import '../../HeaderAdmin/HeaderAdmin.scss'
import './HeaderWaiter.scss'

export const HeaderWaiterMenu = ({ setTypeMenu }) => {

    const navigate = useNavigate()
    const profile = localStorage.getItem('Profile') === 'waiter' ? 'Mesero' : ''
    const [menu, setMenu] = useState('container-menu hidden')

    const showNavigationBar = () => {
        setMenu('visible')
    }

    const closeBar = () => {
        setMenu('hidden')
    }


    const clearSession = () => {
        localStorage.removeItem('Token')
        localStorage.removeItem('Profile')
        localStorage.removeItem('IdUser')
        navigate(LOGIN)
    }


    const showNavigationBarMenu = () => {
        const navBarMenu = document.getElementById('navMenuId')
        navBarMenu.classList.toggle('navMenuView')
    }

    const goToStatus = () => {
        navigate('')
        navigate(WAITER_STATUS)
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
            <div className={`container-menu ${menu}`} id="admin_navBar_id" >
                <button type="button" className="btnX" onClick={closeBar}><i className="bi bi-x-circle"></i></button>
                <div className="cont-menu">
                    <nav className="admin_navBar" id="admin_navBar_id">
                        <button className="itemNavBar" onClick={showNavigationBarMenu} data-nav="users" ><i className="bi bi-person-gear"><br /></i>Menú</button>
                        <article className="navMenu" id="navMenuId">
                            <button type="button" className="btnMenu" onClick={() => { setTypeMenu('Desayuno') }}>Desayuno</button>
                            <button type="button" className="btnMenu" onClick={() => { setTypeMenu('Almuerzo') }} >Almuerzo</button>
                        </article>
                        <button className="itemNavBar" onClick={goToStatus} data-nav="products" ><i className="bi bi-house-gear"><br /></i>Estado de pedido</button>
                        <button className="itemNavBar" onClick={clearSession}><i className="bi bi-box-arrow-right"><br /></i>Cerrar Sesión</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}