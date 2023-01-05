
import { useContext, useRef} from 'react'
import { ProductContext } from '../ItemTableProducts/ItemTableProducts'
import './ModalStyles.scss'
import { requestGetProducts, requestDeleteProduct } from '../../helpers/API_request/productRequest'

export const ModalDelete = ({isOpen, closeModal}) => {
  const { product, setDataProduct } = useContext(ProductContext)
  const token = localStorage.getItem('Token')
  const idRefProd = useRef(null)
  const nameRef = useRef(null)
  const priceRef = useRef(null)
  const imageRefProd = useRef(null)
  const typeRef = useRef(null)

  const handleModalP = (data)=>{
    if(data){
      closeModal()
       isOpen()
    }
  }

  const deleteProduct = () => {
    requestDeleteProduct(product.id, token)
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
          handleModalP(res)
      })
  }

  return (
    <aside className="containerModal">
      <h3 className="tittleModal">¿Quieres eliminar?</h3>
      <form className="formModal">
        <label className="formModal_label">Id</label>
        <input className="formModal_input input_with" type="text" placeholder="id" ref={idRefProd} defaultValue={product.id} />
        <label className="formModal_label">Correo electrónico</label>
        <input className="formModal_input" type="text" ref={nameRef} defaultValue={product.name} />
        <label className="contentModal_label">Price</label>
        <input className="formModal_input" type="number" ref={priceRef} defaultValue={product.price} readOnly /> 
        
        <section className="content_imge">
          <label className="formModal_label" htmlFor="image">Imagen</label>
          <input className="formModal_input" type="file" name="image" defaultValue={product.image} required /> 
           <img ref={imageRefProd} src={product.image} alt="" className="preview_img" />
        </section>

        <label className="formModal_label">Menu</label>
        <div className="containerSelect">
          <select className="formModal_select" ref={typeRef} defaultValue={product.type}>
            <option className="formModal_option"> Desayuno</option>
            <option className="formModal_option">Almuerzo</option>
          
          </select>
          <button className="btnSubmit btnWith" type='button' onClick={deleteProduct}>Eliminar</button>
        </div>
      </form>
    </aside>
  )
}