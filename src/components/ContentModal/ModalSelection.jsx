import { requestDeleteUser } from '../../helpers/API_request/userRequest'

export const ModalSelection = ({ isOpen, closeModal }) => {
    const modalHandle = () => {
        if (isOpen) {
            closeModal(false)
            isOpen(true)
        }
    }

    //esto va en el componente del modalDelete
    const deleteUser = () => {
        requestDeleteUser(28)
    }

    return (
        <article>
            <button type="button" onClick={modalHandle}>Editar usuario</button>
            <button type="button" onClick={deleteUser}>Eliminar usuario</button>
        </article>
    )
}