export const ModalOrder = ({order})=>{
    return(
        <div className="modalConfirm">
           <i className="bi bi-check-circle"></i>
            <h3>Pedido: {order}</h3>
            <h4>Creado con exito! </h4>
        </div>
    )

}