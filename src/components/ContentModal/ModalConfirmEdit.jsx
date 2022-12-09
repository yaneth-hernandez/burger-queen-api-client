import { useContext } from "react"
import { UserContext } from '../ItemTable/ItemTable'
import { ProductContext } from "../ItemTableProducts/ItemTableProducts"

export const ModalConfirmEdit = ({itemEdit}) => {




    if (itemEdit.email && UserContext !== undefined) {
        const { user, setDataUser } = useContext(UserContext)
        return (
            <div className="modalConfirm">
                <i className="bi bi-check-circle"></i>
                <h3>Id: {user.id}</h3>
                <h3>Correo: {user.email}</h3>
                <h4>Editado con exito! </h4>

            </div>
        )
    } else {
        if (itemEdit.name && ProductContext !== undefined) {
            const { product, setDataProduct } = useContext(ProductContext)
            return (
                <div className="modalConfirm">
                    <i className="bi bi-check-circle"></i>
                    <h3>Id: {product.id}</h3>
                    <h3>Producto: {product.name}</h3>
                    <h4>Editado con exito! </h4>

                </div>
            )
        }
    }

}