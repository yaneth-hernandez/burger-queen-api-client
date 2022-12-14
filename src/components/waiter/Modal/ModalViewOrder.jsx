import { useRef } from "react"
import { ItemModal } from "./ItemModal"
import { TableModal } from "./TableModal"
import './ModalStyle.scss'

export const ModalViewOrder = ({ order, orderProduct }) => {
    const statusRef = useRef(null)

    console.log(order)
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
                        <p>{order.dataEntry}</p>
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
            {/* <article>Cantidad:</article>
            <article>{order.products.length}</article> */}

            <TableModal>
                {
                    orderProduct.map((item, i) => (
                        <ItemModal key={i} item={item} />
                    ))
                }
            </TableModal>
            <label className="status">Estado</label>
            <select className="formModal_select" ref={statusRef} defaultValue={order.status} required>
                <option className="formModal_option">pending</option>
                <option className="formModal_option">delivered</option>
                <option className="formModal_option">ready</option>
                
            </select>


        </>
    )
}

