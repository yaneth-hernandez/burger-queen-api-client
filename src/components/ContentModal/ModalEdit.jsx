import { requestEditUser, requestGetUser } from '../../helpers/API_request/userRequest'
import { useContext, useRef, useState } from 'react'
import { UserContext } from '../ItemTable/ItemTable'
import './ModalStyles.scss'


export const ModalEdit = () => {
  const { user, setDataUser } = useContext(UserContext)
  const roleRef = useRef(null)
  const emailRef = useRef(null)
  const idRef = useRef(null)
  const token = localStorage.getItem('Token')

  // const [email, setEmail] = useState(user.email || '')
  // const [role, setRole] = useState(user.role || '')
  // const [id, setId] = useState(user.id || '')

// const validateData=(event, data)=>{
//   if(data === 'Email format is invalid'){
//       console.log('Formato de email inválido')
//   }else {
//     console.log('Open modal')
//   }
// }



  const handleSubmit = (e) => {
    e.preventDefault(e)
    requestEditUser(emailRef.current.value,roleRef.current.value, idRef.current.value, token)
    // requestEditUser(email, role, id, token)
      .then((res) => res.json())
      .then((res) => {
        validateData(e, res)
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
      <h3 className="tittleModal">Editar usuario</h3>
      <form className="formModal" data-text="update" onSubmit={(e) => { handleSubmit(e) }}>
        <label className="formModal_label">Id</label>
        <input className="formModal_input input_with" type="text" placeholder="id"  ref={idRef} defaultValue={ user.id }  readOnly/>
        {/* <input className="formModal_input input_with" type="text" placeholder="id" onChange={e => setId(e.target.value)} value={id} readOnly /> */}
        <label className="formModal_label">Correo electrónico</label>
        <input className="formModal_input" type="text"  ref={emailRef} defaultValue={ user.email } required/>
        {/* <input className="formModal_input" type="text" onChange={e => setEmail(e.target.value)} value={email} /> */}
        <label className="formModal_label">Perfil</label>
        <div className="containerSelect">
          <select className="formModal_select" ref={roleRef} defaultValue={user.role} required>
          {/* <select className="formModal_select" onChange={e => setRole(e.target.value)} value={role} > */}
            <option className="formModal_option"></option>
            <option className="formModal_option">admin</option>
            <option className="formModal_option">waiter</option>
            <option className="formModal_option">chef</option>
          </select>
          <button className="btnSubmit btnWith" type='submit' data-text="editar">Editar</button>
        </div>
      </form>
    </section>
  )
}
//