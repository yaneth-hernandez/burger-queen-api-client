import { useState } from "react"
import { requestCreateUser } from '../../helpers/API_request/userRequest'

export const ModalCreate = () =>{
  const [email, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = ()=>{
    requestCreateUser(email, password, role)
    .then((res) => res.json())
    .then((res)=>{
      console.log(res)
    })
  }

    return(
      <>
      <h3>Crear usuario</h3>
        <form className="contentModal_createUser">
          <label className="contentModal_label">Correo electrónico</label>
          <input type="text" placeholder="@corre" onChange={(e) => setUser(e.target.value)} required/>
          <label className="contentModal_label">Contraseña</label>
          <input type="text" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} required/>
          <label className="contentModal_label">Perfil</label>
          <select onChange={(e) => setRole(e.target.value)}>
            <option>---</option>
            <option>admin</option>
            <option>waiter</option>
            <option>chef</option>
          </select>
          <button type="button" onClick={handleSubmit}>Crear</button>
          </form>
          </>
    )
}