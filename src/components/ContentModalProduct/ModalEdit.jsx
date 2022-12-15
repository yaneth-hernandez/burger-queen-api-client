import { requestEditProducts, requestGetProducts, onChangeImg, uploadImgWeb } from '../../helpers/API_request/productRequest'
import { useContext, useEffect, useRef, useState } from 'react'
import { ProductContext } from '../ItemTableProducts/ItemTableProducts'
import './ModalStyles.scss'


export const ModalEdit = ({ isOpen, closeModal }) => {
  const { product, setDataProduct } = useContext(ProductContext)
  const [image, setImage] = useState(product.image || '')
  const [imageUrl, setImageUrl] = useState(product.image || '')

  const typeRef = useRef(null)
  const nameRef = useRef(null)
  const idRef = useRef(null)
  const priceRef = useRef(null)
  const imgRef = useRef('')

  const token = localStorage.getItem('Token')

  const validateData = () => {
    closeModal()
    isOpen()
  }

  // const handleImage = (e) => {
  //  // if (e.isTrusted) {
  //     setImage(e.target.files)
  //  // }

   
  // }


  const handleChangeImage = async (e) => {
    const urlImgUpload = await onChangeImg(e, setImageUrl)
    const urlImageWeb = await uploadImgWeb(urlImgUpload)
    setImage(urlImageWeb)
}


  // if (image[0] !== undefined && image[0] !== null && image[0] !== '') {
  // postImage(image[0])
  //   .then((res) => res.json())
  //   .then((res) => {
  //     if (res.status >= 200 && res.status <= 400) {
  //       console.log(res.data.image.url)
  //       setImageUrl(res.data.image.url)
  //       imgRef.current.src = res.data.image.url
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault(e)
    
    requestEditProducts(token, product.id, nameRef.current.value,
      priceRef.current.value, image,
      typeRef.current.value)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        requestGetProducts(token)
          .then(res => res.json())
          .then((res) => {
            setDataProduct(res.map(elem => {
              return {
                id: elem.id,
                name: elem.name,
                price: elem.price,
                image: elem.image,
                type: elem.type

              }
            }));
          })
          .catch((error) => {
            console.error(error)
          })
        validateData()
      })
  }


  return (

    <section className="containerModal">
      <h3 className="tittleModal">Editar Producto</h3>
      <form className="formModal" onSubmit={(e) => { handleSubmit(e) }}>
        <label className="formModal_label">Id</label>
        <input className="formModal_input input_with" type="text" placeholder="id" ref={idRef} defaultValue={product.id} readOnly />
        <label className="formModal_label">Name</label>
        <input className="formModal_input" type="text" ref={nameRef} defaultValue={product.name} required />
        <label className="formModal_label">Price</label>
        <input className="formModal_input" type="text" ref={priceRef} defaultValue={product.price} required />
        <section className="content_imge">
          <label className="formModal_label" htmlFor="image">Imagen</label>
          <input className="formModal_input" type="file" name="image" onChange={(e) => { handleChangeImage(e) }} required />
          <img  src={imageUrl} alt="" className="preview_img" />
        </section>
        <label className="formModal_label">Menu</label>
        <div className="containerSelect">
          <select className="formModal_select" ref={typeRef} defaultValue={product.type} >

            <option className="formModal_option">Desayuno</option>
            <option className="formModal_option">Almuerzo</option>

          </select>
          <button className="btnSubmit btnWith" type='submit'>Editar</button>
        </div>
      </form>
    </section>
  )
}