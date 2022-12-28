import '../ViewWaiterOrder/ViewWaiterOrder.scss'

export const TableOrderDelivered = ({ children }) => {
    return (
        <>
            <h3 className="titleList">Ordenes Entregadas</h3>
            <section className="containerTableDelivered">
                <article className="headerList">#Pedido</article>
                <article className="headerList">Cliente</article>
                <article className="headerList">Importe$</article>
                <article className="headerList">Estado</article>
                <article className="headerList">Tiempo</article>
                <article className="headerList">Borrar</article>
                {children}

            </section>
        </>
    )
}