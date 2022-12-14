import { useNavigate } from "react-router-dom";
import { LOGIN, ADMIN_USERS, ADMIN_PRODUCTS } from "../../routes/paths.js";
import logo from '../../assets/Logo.png'
import './HeaderAdmin.scss'



export const HeaderAdmin = () => {
    const navigate = useNavigate()
    const profile = localStorage.getItem('Profile') === 'admin' ? 'Admin' : ''

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

   const navigateAdmin = () => {
    if(window.location.pathname.includes('users')){
       navigate(ADMIN_PRODUCTS)
    }else if(window.location.pathname.includes('products')){
     navigate(ADMIN_USERS)
}
    // console.log(e.target.dataset.nav)
    // console.log(window.location.pathname.includes(e.target.dataset.nav))

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
                    <button className="itemNavBar" data-nav="users" onClick={navigateAdmin}><i className="bi bi-person-gear"><br/></i>Admin Usuario</button>
                    <button className="itemNavBar" data-nav="products" onClick={navigateAdmin}><i className="bi bi-house-gear"><br/></i>Admin Producto</button>
                    <button className="itemNavBar" onClick={clearSession}><i className="bi bi-box-arrow-right"><br/></i>Cerrar Sesión</button>
                </nav>
            </header>
          
            
                   
       
    )
}