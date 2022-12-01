import { requestDeleteUser, requestGetUser } from '../../helpers/API_request/userRequest'
import { useContext, useState } from 'react'
import { UserContext } from '../ItemTable/ItemTable'
import './ModalStyles.scss'

export const ModalDelete = () => {
const {user, setDataUser} = useContext(UserContext)
const token = localStorage.getItem('Token')

const deleteUser = () => {
    requestDeleteUser(user.id)
    .then((res) => res.json())
    .then((res)=>{
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
  
  <section className="containerModal">
      <h3 className="tittleModal">Eliminar usuario</h3>
      <form className="formModal">
        <label className="formModal_label">Id</label>
        <input className="formModal_input input_with" type="text" placeholder="id"  value={user.id} />
        <label className="formModal_label">Correo electrónico</label>
        <input className="formModal_input" type="text"  value={user.email}/>
        {/* <label className="contentModal_label">Contraseña</label>
        <input type="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} readOnly /> */}
        <label className="formModal_label">Perfil</label>
        <div className="containerSelect">
        <select className="formModal_select" value={user.role}>
          <option className="formModal_option"></option>
          <option className="formModal_option">admin</option>
          <option className="formModal_option">waiter</option>
          <option className="formModal_option">chef</option>
        </select>
        <button className="btnSubmit btnWith" type='button' onClick={deleteUser}>Eliminar</button>
        </div>
      </form>
    </section>
  )
}