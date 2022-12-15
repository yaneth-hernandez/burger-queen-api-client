import { HeaderChef } from "../HeaderChef"
import { ItemOrder } from "../ItemOrder/ItemOrder"
import { TableOrder } from "../TableOrder/TableOrder"
import { getOrderList } from "../../../helpers/API_request/orderRequest"
import './ViewChefOrder.scss'
import { useEffect, useState } from "react"

export const ViewChefOrder = () => {
    const token = localStorage.getItem('Token')
    const [orders, setOrders] = useState([])
    
   const getOrder = ()=>{
    getOrderList(token)
    .then((res) => res.json())
    .then((res) => {
        setOrders(
            res.filter((item => {
                if(item.status==='pending'){
                    return {
                    client: item.client || '',
                    id: item.id,
                    dataEntry: item.dataEntry || '',
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
                <HeaderChef />
                <TableOrder>
                    {
                        orders.map((order =>
                            <ItemOrder key={order.id} order={order} getOrder={getOrder} />
                        ))
                    }
                </TableOrder>
        </>
    )
}