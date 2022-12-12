
import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext'
import './Menu.scss'

export const Menu = ({breakFats})=>{
    //console.log(breakFats)
    const {addItemToCart} = useContext(CartContext)
 
    return(
      
        <section className='menu'>
        <h3 className="titleMenu">Desayunos</h3>
        <div className="containerMenu">
        
            {breakFats.map((item, i)=>(
            
               <figure key={i} className="itemMenu" onClick={()=> addItemToCart(breakFats)}><img src={item.image} alt={item.name}/><figcaption><span>{item.name}</span><span>{item.price}</span></figcaption></figure>
            ))}
           </div>
        
        </section>
     
    )

    
}

//onClick={()=> addItemToCart(breakFats)}

