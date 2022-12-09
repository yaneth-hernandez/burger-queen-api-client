export const ModalConfirmCreate = ({newItem})=>{
    if(newItem.email)
        return(
        <div className="modalConfirm">
           <i className="bi bi-check-circle"></i>
            <h3>Id: {newItem.id}</h3>
            <h3>Correo: {newItem.email}</h3>
            <h4>Creado con exito! </h4>
        </div>
    )
    return(
        <div className="modalConfirm">
           <i className="bi bi-check-circle"></i>
            <h3>Id: {newItem.id}</h3>
            <h3>Producto: {newItem.name}</h3>
            <h4>Creado con exito! </h4>
        </div>
    )

}