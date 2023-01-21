import { requestDeleteOrder } from '../../../helpers/API_request/orderRequest'

export const ItemOrderReady = ({ order }) => {
    const currentTime = new Date().toLocaleTimeString('es-ES').split(':')

    const orderTime = order.hour.split(':')

    let timeString = []

    for (let i = 0; i < orderTime.length; i++) {
        timeString.push(Math.abs(parseInt(currentTime[i]) - parseInt(orderTime[i])))
    }
    const preparationTime = timeString.toString().replaceAll(',', ':')

    if (order.status === 'ready')
        return (
            <>
                <article className="itemList">#00{order.id}</article>
                <article className="itemList">{order.client}</article>
                <article className="itemList">${order.amount}.00</article>
                <article className="itemList">{order.status}</article>
                <article className="itemList">{preparationTime}</article>
            </>
        )
}