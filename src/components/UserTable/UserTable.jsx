import { Modal } from '../../pages/Modal/Modal'
import { ModalCreate } from "../ContentModal/ModalCreate.jsx";
import { ModalEdit } from "../ContentModal/ModalEdit.jsx";
import { ModalSelection } from '../ContentModal/ModalSelection';
import { useModal } from "../../helpers/modals/useModal.jsx";

export const UserTable = () => {
  const [isOpenModalCreate, openModalCreate, closeModalCreate] = useModal(false)
  const [isOpenModalEdit, openModalEdit, closeModalEdit] = useModal(false)
  const [isOpenModalSelection, openModalSelection, closeModalSelection] = useModal(false)

  return (
    <>
      <section>
        <button type="button" onClick={openModalCreate}>Crear usuario</button>
      </section>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>Perfil</th>
            <th>Acciones</th>
          </tr>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
            <td>Male</td>
            <td>
            {/* <button onClick={openModalEdit}><i class="bi bi-three-dots-vertical"></i></button> */}
            <button onClick={openModalSelection}><i className="bi bi-three-dots-vertical"></i></button>
            </td>
          </tr>
          <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
            <td>Female</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
            <td>Male</td>
            <td>Male</td>
          </tr>
        </thead>
      </table>
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