import { requestEditUser, requestGetUser } from '../../helpers/API_request/userRequest'
import { useContext, useRef} from 'react'
import { UserContext } from '../ItemTable/ItemTable'
import './ModalStyles.scss'


export const ModalEdit = ({isOpen, closeModal}) => {
  const { user, setDataUser } = useContext(UserContext)
  const roleRef = useRef(null)
  const emailRef = useRef(null)
  const idRef = useRef(null)
  const token = localStorage.getItem('Token')
  const errorRef = useRef(null)
  
const validateData=(data)=>{
  if(data === 'Email format is invalid'){
      errorRef.current.innerText = 'Formato de email inválido'
  }else {
    closeModal()
    isOpen()
    errorRef.current.innerText = ''
  }
}

  const handleSubmit = (e) => {
    e.preventDefault(e)
    requestEditUser(emailRef.current.value,roleRef.current.value, idRef.current.value, token)
      .then((res) => res.json())
      .then((res) => {
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
          validateData(res)
      })
  }

  return (
    <section className="containerModal">
      <h3 className="tittleModal">Editar usuario</h3>
      <form className="formModal" data-text="update" onSubmit={(e) => { handleSubmit(e) }}>
        <label className="formModal_label">Id</label>
        <input className="formModal_input input_with" type="text" placeholder="id"  ref={idRef} defaultValue={ user.id }  readOnly/>
        <label className="formModal_label">Correo electrónico</label>
        <input className="formModal_input" type="text"  ref={emailRef} defaultValue={ user.email } required/>
        <label className="formModal_label">Perfil</label>
        <div className="containerSelect">
          <select className="formModal_select" ref={roleRef} defaultValue={user.role} required>
            <option className="formModal_option">admin</option>
            <option className="formModal_option">waiter</option>
            <option className="formModal_option">chef</option>
          </select>
          <button className="btnSubmit btnWith" type='submit' data-text="editar">Editar</button>
        </div>
        <p ref={errorRef}></p>
      </form>
    </section>
  )
}
