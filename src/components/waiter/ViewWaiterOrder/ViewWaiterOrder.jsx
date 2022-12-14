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


export const OrderStatus = () => {
    const token = localStorage.getItem('Token')
    const [orders, setOrders] = useState([])
    // const [isOPenModalView, openModalView, closeModalView] = useModal(false)
    // const addOrder = (order)=>{
    //     setOrders((prevState) => [...prevState,order])
    //     //setNewUser(user)
    //   }
    
    useEffect(() => {
        getOrderList(token)
            .then((res) => res.json())
            .then((res) => {
                //console.log(res)
                setOrders(
                    res.map((res => {
                       return {
                            client: res.client || '',
                            id: res.id,
                            dataEntry: res.dataEntry || '',
                            status: res.status || '',
                            products: res.products || '',
                            userId:res.userId,
                            amount:res.amount
                        }
                    }))
                )
            })
    }, [orders])


    return (
        <>
        {/* <OrderProvider>   */}
                <HeaderWaiterOrder />
                <TableOrder>
                    {
                        orders.map((order =>
                            <ItemOrder key={order.id} order={order}  />
                        ))
                    }

                </TableOrder>
                {/* <Modal isOpen={isOPenModalView} closeModal={closeModalView}>
                    <ModalViewOrder />
                </Modal> */}
            {/* </OrderProvider>   */}
        </>
    )
}