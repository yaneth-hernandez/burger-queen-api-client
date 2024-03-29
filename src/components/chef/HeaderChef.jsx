import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../routes/paths.js";
import logo from '../../assets/Logo.png'
// import '../HeaderAdmin/HeaderAdmin.scss'
// import '../waiter/HeaderWaiter/HeaderWaiter.scss'
import './HeaderChef.scss'
export const HeaderChef = () => {

    const navigate = useNavigate()
    const profile = localStorage.getItem('Profile') === 'chef' ? 'Jefe de cocina' : ''
    const nav = document.getElementById('admin_navBar_id')

    const showNavigationBar = () => {
        nav.classList.toggle('visible')
    }

    const closeBar = () => {
        nav.classList.remove('visible')
        nav.classList.add('container-menu_ch')
    }


    const clearSession = () => {
        localStorage.removeItem('Token')
        localStorage.removeItem('Profile')
        localStorage.removeItem('IdUser')
        navigate(LOGIN)
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
            <div className='container-menu_ch' id="admin_navBar_id" >
                <button type="button" className="btnX" onClick={closeBar}><i className="bi bi-x-circle"></i></button>
                <div className="cont-menu">
                    <nav className="admin_navBar" id="navBar_id">
                        <button className="itemNavBar" onClick={clearSession}><i className="bi bi-box-arrow-right"><br /></i>Cerrar Sesión</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}