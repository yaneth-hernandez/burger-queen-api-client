import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import './ShoppingCart.scss'
import { ItemCart } from '../ItemCart/ItemCart'

export const ShoppingCart = () => {
    // const [cartOpen, setCartOpen] = useState(false)
   
    const { cartItems, total, deleteItemToCart, addItemToCart } = useContext(CartContext)

   
    return (

        <section className='invoice'>
            {cartItems.length === 0 ? (
                <h4>Ingrese un pedido</h4>
            ) : (
                <>
                    <div className='invoiceHeader'><h4>Pedido#: 001</h4><h4>Cliente: Angela Isabel Castellanos Hernández</h4></div>
                    <section className="invoiceContainer">
                        <article className="headerInvoice">Cantidad</article>
                        <article className="headerInvoice">Imagen</article>
                        <article className="headerInvoice">Detalle</article>
                        <article className="headerInvoice">Importe</article>
                        <article className="headerInvoice">Borrar</article>
                        {cartItems.map((item,i) => (
                            <ItemCart key={i} 
                            item={item} qty={item.qty} addItem={()=>addItemToCart(item.product)} 
                            deleteItem={()=>deleteItemToCart(item.product)} 
                             
                            />
                        ))}
                        
                    </section>
                    <div>Total: ${total} </div>
                    <div className='buttonContainer'>
                        <button className='btnSubmit'>Finalizar compra</button>
                    </div>
                </>
            )}
        </section>
    )
}

{/* <i class="bi bi-dash-circle"></i>
<i class="bi bi-plus-circle"></i> 
<i class="bi bi-trash"></i>*/}



//https://www.youtube.com/watch?v=nrC8sr3WsoM&t=399s

//https://www.youtube.com/watch?v=KtS6QymY6Is