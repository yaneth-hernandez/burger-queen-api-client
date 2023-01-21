import { createContext, useState } from "react"
import { useModal } from "../../helpers/modals/useModal"
import { Modal } from "../../pages/Modal/Modal"
import { ModalEdit } from "../ContentModal/ModalEdit"
import { ModalDelete } from "../ContentModal/ModalDelete"
import { ModalSelection } from "../ContentModal/ModalSelection"
import { ModalConfirmEdit } from "../ContentModal/ModalConfirmEdit"
import { ModalConfirmDelete } from '../ContentModal/ModalConfirmDelete'

export const UserContext = createContext()

export const ItemTable = ({ id, email, role, addUser, setDataUser }) => {
    const [user, setUser] = useState([])
    const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false)
    const [isOpenModalDelete, openModalDelete, closeModalDelete] = useModal(false)
    const [isOpenModalSelection, openModalSelection, closeModalSelection] = useModal(false)
    const [isOpenModalConfirmEdit, openModalConfirmEdit, closeModalConfirmEdit] = useModal(false)
    const [isOpenModalConfirmDelete, openModalConfirmDelete, closeModalConfirmDelete] = useModal(false)

    const handleOnclick = (e) => {
        openModalSelection()
        setUser({
            id: e.target.dataset.id,
            email: e.target.dataset.email,
            role: e.target.dataset.role
        })

    }

    const contextValue = {
        user,
        setDataUser
    }

    return (
        <UserContext.Provider value={contextValue}>
            <>
                <article className="item-table">{id}</article>
                <article className="item-table">{email}</article>
                <article className="item-table">{role}</article>
                <article className="item-table"><button className="selection" onClick={(e) => handleOnclick(e)}><i className="bi bi-three-dots-vertical" data-id={id} data-email={email} data-role={role}></i></button></article>
                <Modal isOpen={isOpenModalSelection} closeModal={closeModalSelection}>
                    <ModalSelection isOpen={openModalEdit} isOpenDelete={openModalDelete} closeModal={closeModalSelection} />
                </Modal>
                <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
                    <ModalEdit onAddUser={addUser} isOpen={openModalConfirmEdit} closeModal={closeModalEdit} />
                </Modal>
                <Modal isOpen={isOpenModalConfirmEdit} closeModal={closeModalConfirmEdit}>
                    <ModalConfirmEdit closeModal={closeModalConfirmEdit} itemEdit={user}/>
                </Modal>
                <Modal isOpen={isOpenModalDelete} closeModal={closeModalDelete}>
                    <ModalDelete isOpen={openModalConfirmDelete} closeModal={closeModalDelete} />
                </Modal>
                <Modal isOpen={isOpenModalConfirmDelete} closeModal={closeModalConfirmDelete}>
                    <ModalConfirmDelete closeModal={closeModalConfirmDelete} />
                </Modal>
            </>
        </UserContext.Provider>
    )
}