import { useContext } from "react"
import { UserContext } from '../ItemTable/ItemTable'

export const ModalConfirmEdit = () => {
    const { user, setDataUser } = useContext(UserContext)
    return (
        <div className="modalConfirm">
            <i className="bi bi-check-circle"></i>
            <h3>Id: {user.id}</h3>
            <h3>Correo: {user.email}</h3>
            <h4>Editado con exito! </h4>

        </div>
    )
}