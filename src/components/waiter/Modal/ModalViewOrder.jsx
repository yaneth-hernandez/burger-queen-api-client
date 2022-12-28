import { useContext, useRef } from "react"
import { ItemModal } from "./ItemModal"
import { TableModal } from "./TableModal"
import { requestEditOrders } from '../../../helpers/API_request/orderRequest'
import './ModalStyle.scss'


export const ModalViewOrder = ({ order, orderProduct, getOrder, closeModal }) => {
    const token = localStorage.getItem('Token')
    const profile = localStorage.getItem('Profile')

    const statusRef = useRef(null)
    const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString('es-ES')}`

    const handleClick = () => {
        requestEditOrders(token, order.id, statusRef.current.value, date)
            .then((res) => res.json())
            .then((res) => {
                getOrder()
                closeModal()
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <>
            <div className="orderHeader">
                <div className="userDateContainer">
                    <div className="user">
                        <h4>Usuario: </h4>
                        <p>{order.userId}</p>
                    </div>
                    <div className="date">
                        <h4>Hora:  </h4>
                        <p>{order.hour}</p>
                    </div>
                </div>
                <div className="orderClientContainer">
                    <div className="order">
                        <h4>Pedido#:</h4>
                        <p>00{order.id}</p>
                    </div>
                    <div className="client">
                        <h4>Cliente:</h4>
                        <p>{order.client || 'N/A'}</p>
                    </div>
                </div>
            </div>
            <TableModal>
                {
                    orderProduct.map((item, i) => (
                        <ItemModal key={i} item={item} />
                    ))
                }
            </TableModal>
            <div className="totalContainer">
                <h4>Total</h4>
                <p>${order.amount}.00</p>
            </div>
            <label className="status">Estado</label>
            <select className="formModal_select" ref={statusRef} defaultValue={order.status} required>
                {
                    profile === 'waiter' ? (
                        <>
                            <option className="formModal_option">pending</option>
                            <option className="formModal_option">delivered</option>
                            <option className="formModal_option">ready</option>
                        </>
                    ) : (
                        <>
                            <option className="formModal_option">pending</option>
                            {/* <option className="formModal_option">delivered</option> */}
                            <option className="formModal_option">ready</option>
                        </>
                    )
                }

            </select>
            <div className="buttonContainer">
                <button className="btnSubmit" type="button" onClick={handleClick}>Cambiar estado</button>
            </div>



        </>
    )
}

