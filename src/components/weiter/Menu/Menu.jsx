import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext'
import './Menu.scss'

export const Menu = ({menu})=>{
    const {addItemToCart} = useContext(CartContext)
 
    return(
        <section className='menu'>
        <h3 className="titleMenu">menu</h3>
        <div className="containerMenu">
            {menu.map((item)=>(
               <figure key={item.id} className="itemMenu" onClick={()=> addItemToCart(item)}><img src={item.image} alt={item.name}/><figcaption><span>{item.name}</span><span>{item.price}</span></figcaption></figure>
            ))}
           </div>
        </section>
    )
}

