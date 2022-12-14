export const TableShoppingCart = ({children}) =>{
    return(
        <section className="invoiceContainer">
                        <article className="headerInvoice">Cantidad</article>
                        <article className="headerInvoice">Imagen</article>
                        <article className="headerInvoice">Detalle</article>
                        <article className="headerInvoice">Importe</article>
                        <article className="headerInvoice">Borrar</article>
                        {children}
                        
                    </section>
    )
}