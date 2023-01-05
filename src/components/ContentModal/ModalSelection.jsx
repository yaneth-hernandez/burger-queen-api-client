
export const ModalSelection = ({ isOpen, isOpenDelete, closeModal }) => {
    const modalHandleEdit = () => {
        if (isOpen) {
            closeModal(false)
            isOpen(true)
        }
    }

    const modalHandleDelete = () => {
        if (isOpen) {
            closeModal(false)
            isOpenDelete(true)
        }
    }

    return (
        <aside className="containerModal">
            <aside className="selectionModal">
                <button className="btnSelection" type="button" onClick={modalHandleEdit}>Editar Usuario</button>
                <button className="btnSelection" type="button" onClick={modalHandleDelete}>Eliminar Usuario</button>
            </aside>
        </aside>
    )
}