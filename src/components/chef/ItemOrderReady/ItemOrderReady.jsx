export const ItemOrderReady = ({order})=>{
    //console.log(order)
    if(order.status === 'ready')
    return(
        <>
        <article className="itemList">#00{order.id}</article>
            <article className="itemList">{order.client}</article>
            <article className="itemList">${order.amount}.00</article>
            <article className="itemList">{order.status}</article>
            <article className="itemList">{order.hour}</article>
            <article className="itemList">{order.totalTime}</article>
            </>
    )
}