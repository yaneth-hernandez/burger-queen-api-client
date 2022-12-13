import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import './ShoppingCart.scss'
import { ItemCart } from '../ItemCart/ItemCart'
import { TableShoppingCart } from '../TableShoppingCart/TableShoppingCart'
import background from "../../../assets/toma_pedido.png"

export const ShoppingCart = ({typeMenu}) => {
    const { cartItems, total, deleteItemToCart, addItemToCart, deleteLineToCart, deleteAllCart } = useContext(CartContext)

    return (
        <form className='invoice'>
            {cartItems.length === 0 ? (
                <figure className='background'>
                <figcaption className='backgroundText'>Seleccione los productos para crear un pedido</figcaption>
                <img src={background} className="backgroundImg"/>
                </figure>
            ) : (
                <>
                <div className='clientContainer'>
                       <label className='client'>Cliente:<input type="text" placeholder='Nombre del cliente'/> </label>
                </div>
                 
                        <TableShoppingCart>
                        {cartItems.map((item,i) => (
                            <ItemCart key={i} 
                            item={item} qty={item.qty} addItem={()=>addItemToCart(item.product)} 
                            deleteItem={()=>deleteItemToCart(item.product)}
                            deleteLine={()=> deleteLineToCart(item.product)} 
                            />
                        ))}
                        </TableShoppingCart>
                    <div className='totalContainer'>
                    <div className='total'>
                    <span className='totalText'>Total:</span>
                    <span className='totalInvoice'>${total}.00</span>
                    </div>
                    </div>
                    <div className='buttonContainer'>
                        <button type="button" className='btnClear'>Eliminar pedido</button>
                        <button type="button" className='btnSubmit'>Enviar pedido</button>
                    </div>

                    
                </>
            )}
        </form>
    )
}

