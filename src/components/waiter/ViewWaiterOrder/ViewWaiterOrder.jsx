import { HeaderWaiterOrder } from "../HeaderWaiter/HeaderWaiterOrder"
import { ItemOrder } from "../ItemOrder/ItemOrder"
import { TableOrder } from "../TableOrder/TableOrder"
import { getOrderList } from "../../../helpers/API_request/orderRequest"
import './ViewWaiterOrder.scss'
import { useEffect, useState } from "react"
import { useModal } from '../../../helpers/modals/useModal'
import { Modal } from '../../../pages/Modal/Modal'
import { ModalViewOrder } from "../Modal/ModalViewOrder"
import { OrderProvider } from '../OrderContext/OrderContext'
import { TableOrderDelivered } from "../TableOrderDelivered/TableOrderDelivered"
import { ItemOrderDelivered } from "../ItemOrderDelivered/ItemOrderDelivered"


export const OrderStatus = () => {
    const token = localStorage.getItem('Token')
    const [orders, setOrders] = useState([])
    const user = localStorage.getItem('Profile')
   
    const getOrder = ()=>{
        getOrderList(token)
            .then((res) => res.json())
            .then((res) => {
                setOrders(
                    res.map((item => {
                        if(user==='waiter'){
                            return {
                            client: item.client || '',
                            id: item.id,
                            dataEntry: item.dataEntry || '',
                            hour:item.hour || '',
                            status: item.status || '',
                            products: item.products || '',
                            userId:item.userId,
                            amount:item.amount
                        }
                        }
                       
                    }))
                )
            })
    }
    
    useEffect(() => {
        getOrder()
    }, [])

    return (
        <>
        
                <HeaderWaiterOrder />
                <TableOrder>
                    {
                        orders.map((order =>
                            <ItemOrder key={order.id} order={order} getOrder={getOrder} />
                        ))
                    }

                </TableOrder>

                <TableOrderDelivered>
                {
                        orders.map((order) =>{
                            return (  <ItemOrderDelivered key={order.id} order={order} getOrder={getOrder} />)
                        })      
                    }
                </TableOrderDelivered>
                
        </>
    )
}