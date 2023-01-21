import { useState, useRef } from "react"
import { requestCreateProduct } from '../../helpers/API_request/productRequest'
import { onChangeImg, uploadImgWeb } from "../../helpers/API_request/productRequest"
import './ModalStyles.scss'

export const ModalCreate = ({ closeModal, onAddProduct, isOpen }) => {
 // const { product, setDataProduct } = useContext(ProductContext)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const token = localStorage.getItem('Token')
  const imgRef = useRef('')

  const validateRegistrationData = (data, event) => {
    event.target.reset()
    closeModal()
    onAddProduct(data)
    isOpen()
  }


  const handleChangeImage = async (e) => {
    const urlImgUpload = await onChangeImg(e, setImageUrl)
    const urlImageWeb = await uploadImgWeb(urlImgUpload)
    setImage(urlImageWeb)
}



  const handleSubmit = (e) => {
    e.preventDefault()
    requestCreateProduct(token, name, price, image, type)
      .then((res) => res.json())
      .then((res) => {
        validateRegistrationData(res, e)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <aside className="containerModal">
      <h3 className="tittleModal">Crear producto</h3>
      <form className="formModal" onSubmit={(e) => handleSubmit(e)}>
        <label className="formModal_label">Nombre del producto</label>
        <input className="formModal_input" type="text" placeholder="" onChange={(e) => setName(e.target.value)} required />
        <section className="content_imge">
          <label className="formModal_label" htmlFor="image">Imagen</label>
          <input className="formModal_input" type="file" name="image" onChange={(e) => { handleChangeImage(e) }} required />
          <img  src={imageUrl} alt="" className="preview_img" />
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
    </aside>
  )
}
