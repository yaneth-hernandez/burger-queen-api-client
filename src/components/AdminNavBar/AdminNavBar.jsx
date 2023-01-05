import React from 'react'

export const AdminNavBar = () => {
    return (
        <nav className="admin_navBar" >
            <button className="itemNavBar" data-nav="users" onClick={navigateAdmin}><i className="bi bi-person-gear"><br /></i>Admin Usuario</button>
            <button className="itemNavBar" data-nav="products" onClick={navigateAdmin}><i className="bi bi-house-gear"><br /></i>Admin Producto</button>
            <button className="itemNavBar" onClick={clearSession}><i className="bi bi-box-arrow-right"><br /></i>Cerrar Sesión</button>
        </nav>
    )
}
