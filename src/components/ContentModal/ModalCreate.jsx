import { useState } from "react"
import { requestCreateUser } from '../../helpers/API_request/userRequest'
import './ModalStyles.scss'

export const ModalCreate = ({closeModal, onAddUser, isOpen}) => {
  const [email, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')

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
        setMessage('')
        event.target.reset()
        closeModal()
        onAddUser(data.user)
        isOpen()
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
    <>
    <aside className="containerModal">
      <h3 className="tittleModal">Crear usuario</h3>
      <form className="formModal" data-text="create" onSubmit={(e) => handleSubmit(e)}>
        <label className="formModal_label">Correo electrónico</label>
        <input className="formModal_input" type="text" placeholder="@corre" onChange={(e) => setUser(e.target.value)} required />
        <label className="formModal_label">Contraseña</label>
        <input className="formModal_input" type="password" placeholder="contraseña" onChange={(e) => setPassword(e.target.value)} required />
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

        <button className="btnSubmit" type="submit" >Crear </button>
        <span className="message">{message}</span> 
      </form>
    </aside>
    </>
  )
}