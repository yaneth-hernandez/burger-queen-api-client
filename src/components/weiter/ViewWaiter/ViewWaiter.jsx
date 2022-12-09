import { useEffect, useState, createContext } from 'react'
import { HeaderWaiter } from '../HeaderWaiter/HeaderWaiter'
import { Menu } from '../Menu/Menu'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { requestGetProducts } from '../../../helpers/API_request/productRequest'

export const MenuContext = createContext()

export const ViewWaiter = ()=>{
const token = localStorage.getItem('Token')
const [menu, setMenu] = useState([])
//const [menuItem, setMenuItem] = useState([])
const [breakFats, setBreakFast] = useState([])
const [dinner, setDinner] = useState([])

useEffect(()=>{
    requestGetProducts(token)
    .then(res => res.json())
    .then((res)=>{
        //console.log(res)
        // setMenuItem(res.map(item => {
        //     return {
        //       name: item.name,
        //       id: item.id,
        //       price: item.price,
        //       image: item.image,
        //       type: item.type,
        //     }
        //   }));
          setBreakFast(res.filter(element => {
            if(element.type === 'Desayuno'){
                return {
                    name: element.name,
                    id: element.id,
                    price: element.price,
                    image: element.image,
                    type: element.type,
                  }
            }
        }));
        setDinner(res.filter(element => {
            if(element.type === 'Almuerzo'){
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
},[])
    
// console.log('Desayuno:', breakFats)
// console.log('Almuerzo:', dinner)
    return(
        <MenuContext.Provider value={menu}>
        <>
            <HeaderWaiter/>
            <Menu breakFats={breakFats} dinner={dinner}/>
            <ShoppingCart/>
        </>
        </MenuContext.Provider>
    )
}