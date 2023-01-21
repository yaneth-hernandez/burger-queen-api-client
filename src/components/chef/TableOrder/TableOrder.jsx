import '../ViewChef/ViewChefOrder.scss'
import { useScreenSize } from '../../../helpers/screen/useScreeSize'

export const TableOrder = ({ children }) => {
    const [width]=useScreenSize()
    if(width >= 576 && width <= 1440){
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
    }else if(width >= 320 && width <= 575){
        return (
            <>
                <h3 className="titleList">Estado de pedidos</h3>
                <aside className="containerTable">
                    <div className="headerList">#Pedido</div>
                    <div className="headerList">Importe$</div>
                    <div className="headerList">Hora</div>
                    <div className="headerList">Estado</div>
                    <div className="headerList">Acciones</div>
                    {children}
                </aside>
            </>
        )
    }
}