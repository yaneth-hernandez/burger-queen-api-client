import '../ViewWaiterOrder/ViewWaiterOrder.scss'

export const TableOrder = ({ children }) => {
    return (
        <>
            <h3 className="titleList">Estado de pedidos</h3>
            <section className="containerTable">
                <article className="headerList">#Pedido</article>
                <article className="headerList">Cliente</article>
                <article className="headerList">Importe$</article>
                <article className="headerList">Hora</article>
                <article className="headerList">Estado</article>
                <article className="headerList">IdUser</article>
                <article className="headerList">Acciones</article>
                {children}

            </section>
        </>
    )
}