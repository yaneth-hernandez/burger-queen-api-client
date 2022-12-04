import { useState, useRef } from "react"
import { requestCreateProduct } from '../../helpers/API_request/productRequest'
import { postImage } from "../../helpers/API_request/productRequest"
import './ModalStyles.scss'

export const ModalCreate = ({ closeModal, onAddProduct }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState([])
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const token = localStorage.getItem('Token')
  const imgRef = useRef('')

  const validateRegistrationData = (data, event) => {
      event.target.reset()
      closeModal()
      onAddProduct(data)
      imgRef.current.src = ''
  }


  postImage(image[0])
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 200) {
        // console.log(res.data.image.url)
        imgRef.current.src = res.data.image.url
      }
    })
    .catch((error) => {
      console.log(error)
    })

  const handleSubmit = (e) => {
    e.preventDefault()
    requestCreateProduct(token, name, type, price, imgRef.current.currentSrc)
      .then((res) => res.json())
      .then((res) => {
        validateRegistrationData(res, e)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <section className="containerModal">
      <h3 className="tittleModal">Crear producto</h3>
      <form className="formModal" onSubmit={(e) => handleSubmit(e)}>
        <label className="formModal_label">Nombre del producto</label>
        <input className="formModal_input" type="text" placeholder="" onChange={(e) => setName(e.target.value)} required />
        <section className="content_imge">
          <label className="formModal_label" htmlFor="image">Imagen</label>
          <input className="formModal_input" type="file" name="image" placeholder="" onChange={(e) => { setImage(e.target.files) }} required />
          <img ref={imgRef} src="" alt="" className="preview_img" />
        </section>
        <label className="formModal_label">Precio</label>
        <input className="formModal_input" type="number" placeholder="" onChange={(e) => setPrice(e.target.value)} required />
        <label className="formModal_label">Menú</label>
        <div className="containerSelect">
          <select className="formModal_select" onChange={(e) => setType(e.target.value)} required>
            <option className="formModal_option" ></option>
            <option className="formModal_option">Desayuno</option>
            <option className="formModal_option">Almuerzo</option>
          </select>
          <button className="btnReset" type="reset" >Limpiar</button>
        </div>

        <button className="btnSubmit" type="submit">Crear producto</button>
      </form>

    </section>
  )
}
