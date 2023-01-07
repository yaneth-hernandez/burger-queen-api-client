import '../ViewChef/ViewChefOrder.scss'

export const TableOrder = ({ children }) => {
    return (
        <>
            <h3 className="titleList">Estado de pedidos</h3>
            <aside className="containerTable">
                <div className="headerList">#Pedido</div>
                <div className="headerList">Cliente</div>
                <div className="headerList">Importe$</div>
                <div className="headerList">Hora</div>
                <div className="headerList">Estado</div>
                <div className="headerList">IdUser</div>
                <div className="headerList">Acciones</div>
                {children}
            </aside>
        </>
    )
}