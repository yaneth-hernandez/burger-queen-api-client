import '../ViewWaiterOrder/ViewWaiterOrder.scss'
// import { OrderContext } from '../OrderContext/OrderContext'
import { createContext, useContext, useState } from 'react'
import { useModal } from '../../../helpers/modals/useModal'
import { Modal } from '../../../pages/Modal/Modal'
import { ModalViewOrder } from '../Modal/ModalViewOrder'

export const OrderContext = createContext()

export const ItemOrder = ({ order }) => {
    const [orderProduct, setOrderProduct] = useState([])
    const [isOPenModalView, openModalView, closeModalView] = useModal(false)



    const handleOnclick = (e) => {
        
        //setOrderItem({})
        // console.log(order.products)
        //setOrderItem(order.products)
        openModalView()
        setOrderProduct(order.products.map((item) => {
            return {
                product: item.product.name,
                price: item.product.price,
                qty: item.qty,
            }
        }))
    }
    console.log(orderProduct)
    return (


        <>
            <article className="itemList">#00{order.id}</article>
            <article className="itemList">{order.client}</article>
            <article className="itemList">{order.amount}</article>
            <article className="itemList">{order.dataEntry}</article>
            <article className="itemList">{order.status}</article>
            <article className="itemList">{order.userId}</article>
            <article className="itemList">
                <button type='button' onClick={(e) => { handleOnclick(e) }}>
                    <i className="bi bi-pencil-square"></i>
                </button>
            </article>
            <Modal isOpen={isOPenModalView} closeModal={closeModalView}>
                <ModalViewOrder order={order} orderProduct={orderProduct}/>
            </Modal>
        </>
    )
}