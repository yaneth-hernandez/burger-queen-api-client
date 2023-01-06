import { useNavigate } from "react-router-dom";
import { LOGIN, ADMIN_USERS, ADMIN_PRODUCTS } from "../../routes/paths.js";
import logo from '../../assets/Logo.png'
import './HeaderAdmin.scss'
import { useState } from "react";



export const HeaderAdmin = () => {
    const navigate = useNavigate()
    const profile = localStorage.getItem('Profile') === 'admin' ? 'Admin' : ''
     const navBar = document.getElementById('admin_navBar_id')
    const [menu, setMenu]=useState('container-menu hidden')
    const clearSession = () => {
        localStorage.removeItem('Token')
        localStorage.removeItem('Profile')
        localStorage.removeItem('IdUser')
        navigate(LOGIN)
    }

    const showNavigationBar = () => {
        // navBar.classList.toggle('container-menu-visible')
        setMenu('visible')
    }

    const closeBar = () => {
        // navBar.classList.remove('container-menu-visible')
        setMenu('hidden')
        console.log('Hola')
    }

    const navigateAdmin = () => {
        if (window.location.pathname.includes('users')) {
            navigate(ADMIN_PRODUCTS)
        } else if (window.location.pathname.includes('products')) {
            navigate(ADMIN_USERS)
            
        }

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
            <div  className={`container-menu ${menu}`} id="admin_navBar_id" >
            <button type="button" className="btnX" onClick={closeBar}><i className="bi bi-x-circle"></i></button>
                <div className="cont-menu">
                    <nav className="admin_navBar" >
                        <button className="itemNavBar" data-nav="users" onClick={navigateAdmin}><i className="bi bi-person-gear"><br /></i>Admin Usuario</button>
                        <button className="itemNavBar" data-nav="products" onClick={navigateAdmin}><i className="bi bi-house-gear"><br /></i>Admin Producto</button>
                        <button className="itemNavBar" onClick={clearSession}><i className="bi bi-box-arrow-right"><br /></i>Cerrar Sesión</button>
                    </nav>
                </div>
            </div>
        </header>




    )
}