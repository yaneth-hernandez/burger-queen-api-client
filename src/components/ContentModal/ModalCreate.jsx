import { useState } from "react"
import { requestCreateUser } from '../../helpers/API_request/userRequest'
import './ModalCreate.scss'

export const ModalCreate = () => {
  const [email, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')
  //const [form, setForm] = useState(false)


  const validateRegistrationData = (data, event) => {
    switch (data) {
      case 'Email format is invalid':
        setMessage('Formato de email inválido');
        break;
      case 'Email already exists':
        setMessage('Email ya existe');
        break;
      case 'Password is too short':
        setMessage('Contraseña demasiado corta');
        break;
      default:
        console.log(data)
        setMessage('')
        event.target.reset()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    requestCreateUser(email, password, role)
      .then((res) => res.json())
      .then((res) => {
        validateRegistrationData(res, e)
      })
      .catch((error) => {
        console.log(error)
      })
    
    setMessage('')
  }

  return (
    <section className="containerModalCreate">
      <h3 className="tittleModal">Crear usuario</h3>
      <form className="formModal_createUser" onSubmit={(e) => handleSubmit(e)}>
        <label className="formModal_label">Correo electrónico</label>
        <input className="formModal_input" type="text" placeholder="@corre" onChange={(e) => setUser(e.target.value)} required />
        <label className="formModal_label">Contraseña</label>
        <input className="formModal_input" type="text" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} required />
        <label className="formModal_label">Perfil</label>
        <div className="containerSelect">
          <select className="formModal_select" onChange={(e) => setRole(e.target.value)} required>
            <option className="formModal_option" ></option>
            <option className="formModal_option">admin</option>
            <option className="formModal_option">waiter</option>
            <option className="formModal_option">chef</option>
          </select>
          <button className="btnReset" type="reset" >Limpiar</button>
        </div>

        <button className="btnSubmit" type="submit">Crear usuario</button>
        <span className="message">{message}</span> 
      </form>

    </section>
  )
}

//ERRORES
//Email format is invalid
//Email already exists
//Password is too short