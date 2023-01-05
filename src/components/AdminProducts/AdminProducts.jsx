import { Modal } from '../../pages/Modal/Modal'
import { ModalCreate } from "../ContentModalProduct/ModalCreate.jsx";
import { ModalConfirmCreate } from '../ContentModal/ModalConfirmCreate'
import { useModal } from "../../helpers/modals/useModal.jsx";
import './AdminProducts.scss'
import { requestGetProducts } from '../../helpers/API_request/productRequest'
import { useEffect, useState} from "react";
import { TableProducts } from "../TableProducts/TableProducts";
import { ItemTableProducts} from "../ItemTableProducts/ItemTableProducts";
import { HeaderAdmin } from '../HeaderAdmin/HeaderAdmin';

export const AdminProducts = () => {
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false)
  const [isOpenModalConfirmation, openModalConfirmation, closeModalConfirmation] = useModal(false)

  const [dataProduct, setDataProduct] = useState([])
  const [newProduct, setNewProduct] = useState([])
  const token = localStorage.getItem('Token')

    const addProduct = (product)=>{
      setDataProduct((prevState) => [...prevState, product])
      setNewProduct(product)
    }

  useEffect(() => {
    requestGetProducts(token)
      .then(res => res.json())
      .then((res) => {
        setDataProduct(res.map(product => {
          return {
            name: product.name,
            id: product.id,
            price: product.price,
            image: product.image,
            type: product.type,
          }
        }));
      })
      .catch((error) => {
        console.error(error)
      })
  }, []);

  return (
    <>
    <HeaderAdmin/>
      <section className="btnContainerCreate" >
        <button type="button" className="btnCreate" onClick={openModalCreate}>Crear producto<i className="bi bi-plus-circle"></i></button>
      </section>
      <TableProducts>
        {
          dataProduct.map(product => (
            <ItemTableProducts
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              type={product.type}
              setDataProduct={setDataProduct}
              onAddProduct={addProduct}
            >
            </ItemTableProducts>
          ))
        }
      </TableProducts>
      <Modal isOpen={isOpenModalCreate} closeModal={closeModalCreate}>
        <ModalCreate closeModal={closeModalCreate} isOpen={openModalConfirmation} onAddProduct={addProduct}/>
      </Modal>
      <Modal isOpen={isOpenModalConfirmation} closeModal={closeModalConfirmation}>
        <ModalConfirmCreate closeModal={closeModalConfirmation} newItem={newProduct}/>
      </Modal>
    </>
  )
}