import { useEffect, useState } from 'react'
import { HeaderWaiter } from '../HeaderWaiter/HeaderWaiter'
import { Menu } from '../Menu/Menu'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { requestGetProducts } from '../../../helpers/API_request/productRequest'
import { CartProvider } from '../CartContext/CartContext'


export const ViewWaiter = ()=>{
const token = localStorage.getItem('Token')
const [menu, setMenu] = useState([]) 
const [typeMenu, setTypeMenu ] = useState('Desayuno')


useEffect(()=>{
    requestGetProducts(token)
    .then(res => res.json())
    .then((res)=>{
        setMenu(res.filter(element => {
            if(element.type === typeMenu){
               
                return {
                    name: element.name,
                    id: element.id,
                    price: element.price,
                    image: element.image,
                    type: element.type,
                  }
            }
        }));
    })
},[typeMenu])
    return(
      <CartProvider>
        <>
            <HeaderWaiter setTypeMenu={setTypeMenu} />
            <Menu menu={menu} typeMenu={typeMenu}/>
            <ShoppingCart typeMenu={typeMenu}/>
            
        </>
        </CartProvider>
    )
}