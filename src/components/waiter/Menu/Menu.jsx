import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext'
import './Menu.scss'

export const Menu = ({menu, typeMenu})=>{
    const {addItemToCart} = useContext(CartContext)

    return(
        <section className='menu'>
        <h3 className="titleMenu">{typeMenu}</h3>
        <div className="containerMenu">
            {menu.map((item)=>(
               <figure key={item.id} className="itemMenu" onClick={()=> addItemToCart(item)}><img src={item.image} alt={item.name}/><figcaption><span>{item.name}</span><span>${item.price}.00</span></figcaption></figure>
            ))}
           </div>
        </section>
    )
}

