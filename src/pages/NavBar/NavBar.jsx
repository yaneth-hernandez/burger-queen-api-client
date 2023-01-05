import React, { Children } from 'react'

export const NavBar = ({children}) => {
  return (
    <div  className={`container-menu ${menu}`} id="admin_navBar_id" >
            <button type="button" className="btnX" onClick={closeBar}><i className="bi bi-x-circle"></i></button>
                <div className="cont-menu">
                    {children}
                </div>
            </div>
  )
}
