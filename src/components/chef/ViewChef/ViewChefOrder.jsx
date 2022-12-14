import { HeaderChef } from "../HeaderChef"
import { ItemOrder } from "../ItemOrder/ItemOrder"
import { TableOrder } from "../TableOrder/TableOrder"
import { getOrderList } from "../../../helpers/API_request/orderRequest"
import './ViewChefOrder.scss'
import { useEffect, useState } from "react"
// import { useModal } from '../../../helpers/modals/useModal'
// import { Modal } from '../../../pages/Modal/Modal'
// import { ModalViewOrder } from "../Modal/ModalViewOrder"
// import { OrderProvider } from '../OrderContext/OrderContext'


export const ViewChefOrder = () => {
    const token = localStorage.getItem('Token')
    const [orders, setOrders] = useState([])
    const user = localStorage.getItem('Profile')
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
                    res.filter((item => {
                        
                        if(item.status==='pending'){
                            //console.log(item)
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
    }, [orders])


    return (
        <>
        
                <HeaderChef />
                <TableOrder>
                    {
                        orders.map((order =>
                            <ItemOrder key={order.id} order={order}  />
                        ))
                    }

                    

                </TableOrder>
                
        </>
    )
}