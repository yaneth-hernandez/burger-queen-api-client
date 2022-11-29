
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
        <article>
            <button type="button" onClick={modalHandleEdit}>Editar usuario</button>
            <button type="button" onClick={modalHandleDelete}>Eliminar usuario</button>
        </article>
    )
}