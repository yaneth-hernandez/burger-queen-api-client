import { requestDeleteUser, requestGetUser } from '../../helpers/API_request/userRequest'
import { useContext, useState, useRef, } from 'react'
import { UserContext } from '../ItemTable/ItemTable'
import './ModalStyles.scss'

export const ModalDelete = () => {
  const { user, setDataUser } = useContext(UserContext)
  const token = localStorage.getItem('Token')
  const roleRef = useRef(null)
  const emailRef = useRef(null)
  const idRef = useRef(null)



  const deleteUser = () => {
    // requestDeleteUser(user.id)
    requestDeleteUser(user.id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        requestGetUser(token)
          .then(res => res.json())
          .then((res) => {
            setDataUser(res.map(user => {
              return {
                email: user.email,
                id: user.id,
                password: user.password,
                role: user.role,
              }
            }));
          })
          .catch((error) => {
            console.error(error)
          })
      })
  }

  return (

    // <div className="containerModal">
    //   <h3 className="tittleModal">Está seguro de querer eliminar:</h3>
    //   <h4>Id</h4>
    //   <p className="formModal_input_delete">{user.id}</p>
    //   <h4>Email</h4>
    //   <p className="formModal_input_delete">{user.email}</p>
    //   <h4>Role</h4>
    //   <p className="formModal_input_delete">{user.role}</p>
    //   <button className="btnSubmit btnWith" type='button' onClick={deleteUser}>Eliminar</button>
    // </div>

    <section className="containerModal">
      <h3 className="tittleModal">¿Quieres eliminar?</h3>
      <form className="formModal">
        <label className="formModal_label">Id</label>
        <input className="formModal_input input_with" type="text" placeholder="id"  ref={idRef} defaultValue={ user.id } readOnly/>
        <label className="formModal_label">Correo electrónico</label>
        <input className="formModal_input" type="text"  ref={emailRef} defaultValue={ user.email } readOnly/>
        {/* <label className="contentModal_label">Contraseña</label>
        <input type="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} readOnly /> */}
        <label className="formModal_label">Perfil</label>
        <div className="containerSelect">
        <select className="formModal_select" ref={roleRef} defaultValue={user.role} readOnly>
          <option className="formModal_option"></option>
          <option className="formModal_option">admin</option>
          <option className="formModal_option">waiter</option>
          <option className="formModal_option">chef</option>
        </select>
        <button className="btnSubmit btnWith" type='button' data-text='delete' onClick={deleteUser}>Eliminar</button>
        </div>
      </form>
    </section>
  )
}