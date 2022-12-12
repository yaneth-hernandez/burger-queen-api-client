import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import '../ShoppingCart/ShoppingCart.scss';

export const ItemCart = ({item, qty, addItem, deleteItem}) => {
//console.log(item.product)
   
    return (
        <>
           
                        <article className="itemInvoice">
                            <button onClick={() => { addItem(item.product) }}><i className="bi bi-plus-circle-fill"></i></button>
                            <span>{item.qty}</span>
                            <button onClick={() => { deleteItem(item.product) }}><i className="bi bi-dash-circle-fill"></i></button>
                        </article>
                        <article className="itemInvoice"><img src={item.product.image} /></article>
                        <article className="itemInvoice">{item.product.name}</article>
                        <article className="itemInvoice">{item.qty * item.product.price}$</article>
                        <article className="itemInvoice"><button><i className="bi bi-trash-fill"></i></button></article>

            </>
    )
}

