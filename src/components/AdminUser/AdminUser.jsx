import { Modal } from '../../pages/Modal/Modal'
import { ModalCreate } from "../ContentModal/ModalCreate.jsx";
import { ModalEdit } from "../ContentModal/ModalEdit.jsx";
import { ModalSelection } from '../ContentModal/ModalSelection';
import { useModal } from "../../helpers/modals/useModal.jsx";
import './AdminUser.scss'
import { UserList } from '../UserList/UserList';


export const AdminUser = () => {
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false)
  const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false)
  const [isOpenModalSelection, openModalSelection, closeModalSelection] = useModal(false)

  return (
    <>
      <section>
        <button type="button" onClick={openModalCreate}>Crear usuario</button>
      </section>

      <UserList isOpen={openModalSelection}/>
      <Modal isOpen={isOpenModalCreate} closeModal={closeModalCreate}>
        <ModalCreate />
      </Modal>
      <Modal isOpen={isOpenModalEdit} closeModal={closeModalEdit}>
        <ModalEdit />
      </Modal>
      <Modal isOpen={isOpenModalSelection} closeModal={closeModalSelection}>
      <ModalSelection isOpen={openModalEdit} closeModal={closeModalSelection}/>
      </Modal>
    </>
  )
}
//isOpen={openModalEdit} closeModal={closeModalSelection}