import '../ShoppingCart/ShoppingCart.scss';

export const ItemCart = ({ item, addItem, deleteItem, deleteLine }) => {
    return (
        <>
            <article className="itemInvoice quantity">
                <button type="button"  onClick={() => { addItem(item.product) }}><i className="bi bi-plus-circle-fill"></i></button>
                <span>{item.qty}</span>
                <button type="button" onClick={() => { deleteItem(item.product) }}><i className="bi bi-dash-circle-fill"></i></button>
            </article>
            <article className="itemInvoice"><img src={item.product.image} /></article>
            <article className="itemInvoice">{item.product.name}</article>
            <article className="itemInvoice">${item.qty * parseInt(item.product.price)}.00</article>
            <article className="itemInvoice"><button type="button" onClick={() => {deleteLine(item.product)}}><i className="bi bi-trash-fill"></i></button></article>
        </>
    )
}

