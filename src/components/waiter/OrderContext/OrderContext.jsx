import { createContext, useState } from "react";

export const OrderContext = createContext()

export const OrderProvider = ({children})=>{
const [order, setOrder] = useState([])

const viewOderDetail = (product) => {
    const inList = order.find(
        (productInList) => productInList.id === product.id
    )
    if (inList) {
        setOrder(
            order.map((productInList) => {
                if (productInList.id === product.id) {
                    return productInList
                } 
            })
        )
    } 
    console.log(order)
}


    return(
        <OrderContext.Provider value={viewOderDetail}>
            {children}
        </OrderContext.Provider>
    )
}