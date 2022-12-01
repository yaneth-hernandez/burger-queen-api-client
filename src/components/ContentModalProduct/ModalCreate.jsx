import { useState } from "react"
import { requestCreateProduct } from '../../helpers/API_request/productRequest'
import './ModalStyles.scss'

export const ModalCreate = ({closeModal, onAddProduct}) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [menu, setMenu] = useState('')
  const [previewImage, setPreviewImage]=useState(null)
  const [message, setMessage] = useState('')
  //const [form, setForm] = useState(false)
console.log('Información',image[0])

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
        closeModal()
        onAddUser(data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    requestCreateProduct(email, password, role)
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
    <section className="containerModal">
      <h3 className="tittleModal">Crear producto</h3>
      <form className="formModal" onSubmit={(e) => handleSubmit(e)}>
        <label className="formModal_label">Nombre del producto</label>
        <input className="formModal_input" type="text" placeholder="" onChange={(e) => setName(e.target.value)} required />
        <section className="content_imge">
        <label className="formModal_label" htmlFor="image">Imagen</label>
        <input className="formModal_input" type="file" name="image" placeholder="" onChange={(e) => {setImage(e.target.files), setPreviewImage(e.target.src)}} required />
        <img src={image[0]} alt="" className="preview_img" />
        </section>
        <label className="formModal_label">Precio</label>
        <input className="formModal_input" type="number" placeholder="" onChange={(e) => setPrice(e.target.value)} required />
        <label className="formModal_label">Menú</label>
        <div className="containerSelect">
          <select className="formModal_select" onChange={(e) => setMenu(e.target.value)} required>
            <option className="formModal_option" ></option>
            <option className="formModal_option">Desayuno</option>
            <option className="formModal_option">Almuerzo</option>
          </select>
          <button className="btnReset" type="reset" >Limpiar</button>
        </div>

        <button className="btnSubmit" type="submit">Crear producto</button>
        <span className="message">{message}</span> 
      </form>

    </section>
  )
}
