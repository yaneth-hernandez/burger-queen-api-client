import { createContext, useState } from "react"
import { useModal } from "../../helpers/modals/useModal"
import { Modal } from "../../pages/Modal/Modal"
import { ModalEdit } from '../ContentModalProduct/ModalEdit'
import { ModalDelete } from "../ContentModalProduct/ModalDelete"
import { ModalSelection } from "../ContentModalProduct/ModalSelection"

export const ProductContext = createContext()

export const ItemTableProducts = ({ id, name, price, image, type, addProduct, setDataProduct }) => {
    const [product, setProduct] = useState([])
    const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false)
    const [isOpenModalDelete, openModalDelete, closeModalDelete] = useModal(false)
    const [isOpenModalSelection, openModalSelection, closeModalSelection] = useModal(false)
   
    const handleOnclick = (e) => {
        openModalSelection()
        setProduct({
            id:e.target.dataset.id,
            name:e.target.dataset.name,
            price: e.target.dataset.price,
            image: e.target.dataset.image,
            type: e.target.dataset.type,
        })
       
    }

    const contextValue = {
        product,
        setDataProduct
    }

    return (
        <ProductContext.Provider value={contextValue}>
        <>
            <article className="item-table"><span>{id}</span></article>
            <article className="item-table"><img src={image} alt={name}/></article>
            <article className="item-table"><span>{name}</span></article>
            <article className="item-table"><span>{price}</span></article> 
            
            <article className="item-table"><span>{type}</span></article>
            <article className="item-table"><button className="selection" onClick={(e) => handleOnclick(e)}><i className="bi bi-three-dots-vertical" data-id={id} data-name={name} data-type={type} data-image={image} data-price={price}></i></button></article>
            {/* <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
                <ModalEdit onAddProduct={addProduct}/>
            </Modal>
            <Modal isOpen={isOpenModalDelete} closeModal={closeModalDelete}>
                <ModalDelete />
            </Modal>
            <Modal isOpen={isOpenModalSelection} closeModal={closeModalSelection}>
                <ModalSelection isOpen={openModalEdit} isOpenDelete={openModalDelete} closeModal={closeModalSelection} />
            </Modal> */}
          
        </>
        </ProductContext.Provider>
    )
}