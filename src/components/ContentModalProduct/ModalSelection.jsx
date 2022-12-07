
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
        <section className="containerModal">
            <article className="selectionModal">
                <button className="btnSelection" type="button" onClick={modalHandleEdit}>Editar Producto</button>
                <button className="btnSelection" type="button" onClick={modalHandleDelete}>Eliminar Producto</button>
            </article>
        </section>
    )
}