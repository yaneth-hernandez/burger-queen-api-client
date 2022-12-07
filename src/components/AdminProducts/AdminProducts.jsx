import { Modal } from '../../pages/Modal/Modal'
import { ModalCreate } from "../ContentModalProduct/ModalCreate.jsx";
// import { ModalEdit } from "../ContentModalProduct/ModalEdit.jsx";
// import { ModalSelection } from '../ContentModalProduct/ModalSelection';
import { ModalConfirmCreate } from '../ContentModal/ModalConfirmCreate'

import { useModal } from "../../helpers/modals/useModal.jsx";
import './AdminProducts.scss'
// import { UserList } from '../UserList/UserList';
import { requestGetProducts } from '../../helpers/API_request/productRequest'
import { useEffect, useState, createContext, useContext } from "react";
import { TableProducts } from "../TableProducts/TableProducts";
import { ItemTableProducts} from "../ItemTableProducts/ItemTableProducts";
import { HeaderAdmin } from '../HeaderAdmin/HeaderAdmin';
//export const UserContext = createContext();

export const AdminProducts = () => {
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false)
  const [isOpenModalConfirmation, openModalConfirmation, closeModalConfirmation] = useModal(false)
  // const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false)
  // const [isOpenModalSelection, openModalSelection, closeModalSelection] = useModal(false)
  //const [isOpenModalDelete, openModalDelete, closeModalDelete] = useModal(false)
    

  const [dataProduct, setDataProduct] = useState([])
  const [newProduct, setNewProduct] = useState([])
  const token = localStorage.getItem('Token')


  //const getUserList = ()=>{
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
  //}

  

  return (
    <>
    <HeaderAdmin/>
      <section className="btnContainerCreate" >
        <button type="button" className="btnCreate" onClick={openModalCreate}>Crear producto<i className="bi bi-plus-circle"></i></button>
      </section>
      {/* <UserContext.Provider value={edit}> */}

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
            //isOpen={openModalSelection}
            >

              {/* <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
                <ModalEdit />
              </Modal> */}


            </ItemTableProducts>

          ))
        }
      </TableProducts>
      {/*</UserContext.Provider>*/}
      {/* <UserList isOpen={openModalSelection}/> */}
      <Modal isOpen={isOpenModalCreate} closeModal={closeModalCreate}>
        <ModalCreate closeModal={closeModalCreate} isOpen={openModalConfirmation} onAddProduct={addProduct}/>
      </Modal>
      {/* <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
        <ModalEdit />
      </Modal> */}
      <Modal isOpen={isOpenModalConfirmation} closeModal={closeModalConfirmation}>
        <ModalConfirmCreate closeModal={closeModalConfirmation} newItem={newProduct}/>
      </Modal>
      
      {/* <Modal isOpen={isOpenModalSelection} closeModal={closeModalSelection}>
        <ModalSelection isOpen={openModalEdit} closeModal={closeModalSelection} />
      </Modal> */}
    </>
  )
}
//isOpen={openModalEdit} closeModal={closeModalSelection}