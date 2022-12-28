import '../ViewChef/ViewChefOrder.scss'
import { createContext, useState } from 'react'
import { useModal } from '../../../helpers/modals/useModal'
import { Modal } from '../../../pages/Modal/Modal'
import { ModalViewOrder } from '../../waiter/Modal/ModalViewOrder'

export const OrderContext = createContext()

export const ItemOrder = ({ order,getOrder}) => {
    const [orderProduct, setOrderProduct] = useState([])
    const [isOPenModalView, openModalView, closeModalView] = useModal(false)

    const handleOnclick = (e) => {
        openModalView()
        setOrderProduct(order.products.map((item) => {
            return {
                product: item.product.name,
                price: item.product.price,
                qty: item.qty,
            }
        }))
    }

    if(order.status === 'pending')
    return (
        <>
        
                <>
                <article className="itemList">#00{order.id}</article>
            <article className="itemList">{order.client}</article>
            <article className="itemList">${order.amount}.00</article>
            <article className="itemList">{order.hour}</article>
            <article className="itemList">{order.status}</article>
            <article className="itemList">{order.userId}</article>
            <article className="itemList">
                <button type='button' onClick={(e) => { handleOnclick(e) }}>
                    <i className="bi bi-pencil-square"></i>
                </button>
            </article>
            </>
             
        
           
            <Modal isOpen={isOPenModalView} closeModal={closeModalView}>
                <ModalViewOrder order={order} orderProduct={orderProduct} getOrder={getOrder} isOpen={isOPenModalView} closeModal={closeModalView}/>
            </Modal>
        </>
    )
    // else
    // return(
    //     <p>No hay ordenes pendientes</p>
    // )
}