import { requestEditUser } from '../../helpers/API_request/userRequest'
import { useContext, useState } from 'react'
import { UserContext } from '../ItemTable/ItemTable'
import './ModalStyles.scss'

export const ModalEdit = () => {
const user = useContext(UserContext)
const [role, setRole] = useState(user.role)
const [email, setEmail] = useState(user.email)

  const handleSubmit = (e) => {
    e.preventDefault(e)
    requestEditUser(email,role, user.id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }

  return (
  
  <section className="containerModal">
      <h3 className="tittleModal">Editar usuario</h3>
      <form className="formModal" onSubmit={(e) => { handleSubmit(e) }}>
        <label className="formModal_label">Id</label>
        <input className="formModal_input input_with" type="text" placeholder="id"  value={user.id} readOnly />
        <label className="formModal_label">Correo electrónico</label>
        <input className="formModal_input" type="text"  defaultValue={user.email} onChange={(e) => setEmail(e.target.value)}/>
        {/* <label className="contentModal_label">Contraseña</label>
        <input type="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} readOnly /> */}
        <label className="formModal_label">Perfil</label>
        <div className="containerSelect">
        <select className="formModal_select" defaultValue={user.role} onChange={(e) => setRole(e.target.value)}>
          <option className="formModal_option"></option>
          <option className="formModal_option">admin</option>
          <option className="formModal_option">waiter</option>
          <option className="formModal_option">chef</option>
        </select>
        <button className="btnSubmit btnWith" type='submit'>Editar</button>
        </div>
      </form>
    </section>
  )
}