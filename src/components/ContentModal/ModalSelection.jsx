export const ModalSelection = ({isOpen, closeModal})=>{
   
    const modalHandle = () =>{
    if(isOpen){
        closeModal(false)
        isOpen(true)
    }
   }

    return(
        <article>
            <button type="button" onClick={modalHandle}>Editar usuario</button>
            <button type="button">Eliminar usuario</button>
        </article>
    )
}