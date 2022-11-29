import { useContext, createContext, useState } from "react"
import { useModal } from "../../helpers/modals/useModal"
import { Modal } from "../../pages/Modal/Modal"
import { ModalEdit } from "../ContentModal/ModalEdit"
import { ModalDelete } from "../ContentModal/ModalDelete"
import { ModalSelection } from "../ContentModal/ModalSelection"

export const UserContext = createContext()

export const ItemTable = ({ id, email, role }) => {
    const [user, setUser] = useState([])
    const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false)
    const [isOpenModalDelete, openModalDelete, closeModalDelete] = useModal(false)
    const [isOpenModalSelection, openModalSelection, closeModalSelection] = useModal(false)
    // const dataUser={
    //     id:id,
    //     email:email,
    //     role:role,
    // }
    //console.log(dataUser)
    const handleOnclick = (e) => {
        openModalSelection()
        setUser({
            id:e.target.dataset.id,
            email:e.target.dataset.email,
            role: e.target.dataset.role
        })
       
    }

    return (
        <UserContext.Provider value={user}>
        <>
            <article className="item-table">{id}</article>
            <article className="item-table">{email}</article>
            {/* <article className="item-table">******</article>  */}
            <article className="item-table">{role}</article>
            <article className="item-table"><button className="selection" onClick={(e) => handleOnclick(e)}><i className="bi bi-three-dots-vertical" data-id={id} data-email={email} data-role={role}></i></button></article>
            <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
                <ModalEdit />
            </Modal>
            <Modal isOpen={isOpenModalDelete} closeModal={closeModalDelete}>
                <ModalDelete />
            </Modal>
            <Modal isOpen={isOpenModalSelection} closeModal={closeModalSelection}>
                <ModalSelection isOpen={openModalEdit} isOpenDelete={openModalDelete} closeModal={closeModalSelection} />
            </Modal>
        </>
        </UserContext.Provider>
    )
}