import './ShoppingCart.scss'

export const ShoppingCart = () => {
    return (
        <section className='invoice'>
            <div className='invoiceHeader'><h4>Pedido#: 001</h4><h4>Cliente: Angela Isabel Castellanos Hernández</h4></div>
            <section className="invoiceContainer">
                <article className="headerInvoice">Cantidad</article>
                <article className="headerInvoice">Detalle</article>
                <article className="headerInvoice">Importe</article>
                <article className="headerInvoice">Borrar</article>
                <article className="itemInvoice">
                    <button><i className="bi bi-plus-circle-fill"></i></button>
                    <span>1</span>
                    <button><i className="bi bi-dash-circle-fill"></i></button>
                </article>
                <article className="itemInvoice">Sandwich</article>
                <article className="itemInvoice">10.00$</article>
                <article className="itemInvoice"><button><i className="bi bi-trash-fill"></i></button></article>
            </section>
        </section>
    )
}

{/* <i class="bi bi-dash-circle"></i>
<i class="bi bi-plus-circle"></i> 
<i class="bi bi-trash"></i>*/}