import { requestDeleteOrder } from '../../../helpers/API_request/orderRequest'

export const ItemOrderDelivered = ({ order, getOrder }) => {

    const token = localStorage.getItem('Token')
    const currentTime = new Date().toLocaleTimeString('es-ES').split(':')

    const orderTime = order.hour.split(':')

    let timeString = []

    for (let i = 0; i < orderTime.length; i++) {
        timeString.push(Math.abs(parseInt(currentTime[i]) - parseInt(orderTime[i])))
    }
    const deliveryTime = timeString.toString().replaceAll(',', ':')

    const deleteOrder = () => {
        requestDeleteOrder(token, order.id)
            .then((res) => res.json())
            .then((res) => {
                getOrder()
            })
    }

    if (order.status === 'delivered')
        return (
            <>
                <article className="itemList">#00{order.id}</article>
                <article className="itemList">{order.client}</article>
                <article className="itemList">${order.amount}.00</article>
                <article className="itemList">{order.status}</article>
                <article className="itemList">{deliveryTime}</article>
                <article className="itemList"><button className="btnDelete" type="button" onClick={deleteOrder}><i className="bi bi-trash-fill"></i></button></article>
                
            </>
        )
}