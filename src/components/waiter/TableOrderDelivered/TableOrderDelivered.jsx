import { useScreenSize } from '../../../helpers/screen/useScreeSize'
import '../ViewWaiterOrder/ViewWaiterOrder.scss'

export const TableOrderDelivered = ({ children }) => {
    const [width] = useScreenSize()

    if (width >= 576 && width <= 1440) {
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
    }else if (width >= 320 && width <= 575){
        return (
            <>
                <h3 className="titleList">Ordenes Entregadas</h3>
                <section className="containerTableDelivered">
                    <article className="headerList">#Pedido</article>
                    <article className="headerList">Importe$</article>
                    <article className="headerList">Estado</article>
                    <article className="headerList">Tiempo</article>
                    <article className="headerList">Borrar</article>
                    {children}
    
                </section>
            </>
        )
    }
}