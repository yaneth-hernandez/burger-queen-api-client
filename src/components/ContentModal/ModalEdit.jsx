import { requestEditUser } from '../../helpers/API_request/userRequest'
import { useState } from 'react'
import './ModalStyles.scss'

export const ModalEdit = ({id,email,role}) => {
  const [idU, setId] = useState('')
  const [emailU, setUser] = useState('')
  //const [password, setPassword] = useState('')
  const [roleU, setRole] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(id)
    requestEditUser(emailU,roleU, idU)
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
        <input className="formModal_input input_with" type="text" placeholder="id" onChange={(e) => setId(e.target.value)} required />
        <label className="formModal_label">Correo electrónico</label>
        <input className="formModal_input" type="text" placeholder="@corre" onChange={(e) => setUser(e.target.value)} required />
        {/* <label className="contentModal_label">Contraseña</label>
        <input type="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} readOnly /> */}
        <label className="formModal_label">Perfil</label>
        <div className="containerSelect">
        <select className="formModal_select" onChange={(e) => setRole(e.target.value)}>
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