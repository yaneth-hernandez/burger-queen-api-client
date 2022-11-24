import { requestEditUser } from '../../helpers/API_request/userRequest'
import { useState } from 'react'

export const ModalEdit = () => {
  const [id, setId] = useState('')
  const [email, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log('click')
    requestEditUser(email, password, role, id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <>
      <h3>Editar usuario</h3>
      <form className="contentModal_createUser" onSubmit={(e) => { handleSubmit(e) }}>
        <label className="contentModal_label">Id</label>
        <input type="text" placeholder="id" onChange={(e) => setId(e.target.value)} required />
        <label className="contentModal_label">Correo electrónico</label>
        <input type="text" placeholder="@corre" onChange={(e) => setUser(e.target.value)} required />
        {/* <label className="contentModal_label">Contraseña</label>
        <input type="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} readOnly /> */}
        <label className="contentModal_label">Perfil</label>
        <select onChange={(e) => setRole(e.target.value)}>
          <option></option>
          <option>admin</option>
          <option>waiter</option>
          <option>chef</option>
        </select>
        <button type='submit'>Editar</button>
      </form>
    </>
  )
}