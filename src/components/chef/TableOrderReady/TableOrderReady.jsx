import '../ViewChef/ViewChefOrder.scss'

export const TableOrderReady = ({ children }) => {
    return (
        <>
            <h3 className="titleList">Ordenes Listas</h3>
            <section className="containerTableReady">
                <article className="headerList">#Pedido</article>
                <article className="headerList">Cliente</article>
                <article className="headerList">Importe$</article>
                <article className="headerList">Estado</article>
                <article className="headerList">Tiempo</article>
                {children}

            </section>
        </>
    )
}