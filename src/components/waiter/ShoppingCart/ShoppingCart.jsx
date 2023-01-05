import { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import './ShoppingCart.scss'
import { ItemCart } from '../ItemCart/ItemCart'
import { TableShoppingCart } from '../TableShoppingCart/TableShoppingCart'
import { requestCreateOrder } from '../../../helpers/API_request/orderRequest'
import background from "../../../assets/toma_pedido.png"
import { useModal } from '../../../helpers/modals/useModal'
import { ModalOrder } from '../Modal/ModalOrder'
import { Modal } from '../../../pages/Modal/Modal'

export const ShoppingCart = () => {
    const { cartItems, total, deleteItemToCart, addItemToCart, deleteLineToCart, deleteAllCart } = useContext(CartContext)

    const [isOpenModalOrder, openModalOrder, closeModalOrder] = useModal(false)

    const token = localStorage.getItem('Token')

    const idUser = localStorage.getItem('IdUser')

    const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString('es-ES')}`
    const hour = `${new Date().toLocaleTimeString('es-ES')}`
    //const idUser = new Date().getTime()

    const time = '00:00'

    const [client, setClient] = useState('')

    const [order, setOrder] = useState('')

    const handleOnclick = () => {
        requestCreateOrder(token, idUser, client, cartItems, total, 'pending', date, hour, time)
            .then((res) => res.json())
            .then((res) => {
                setOrder(res.id)
                openModalOrder()
            })
    }

    return (
        <>
            <form className='invoice'>
                {cartItems.length === 0 ? (
                    <figure className='background'>
                        <figcaption className='backgroundText'>Seleccione los productos para crear un pedido</figcaption>
                        <img src={background} className="backgroundImg" />
                    </figure>
                ) : (
                    <>
                        <div className='clientContainer'>
                            <label className='client'>Cliente:
                                <input type="text" placeholder='Nombre del cliente' onChange={(e) => setClient(e.target.value)} required />
                            </label>

                            <p>Pedido#:{order}</p>
                        </div>
                        <TableShoppingCart>
                            {cartItems.map((item, i) => (
                                <ItemCart key={i}
                                    item={item} qty={item.qty} addItem={() => addItemToCart(item.product)}
                                    deleteItem={() => deleteItemToCart(item.product)}
                                    deleteLine={() => deleteLineToCart(item.product)}
                                />
                            ))}
                        </TableShoppingCart>
                        <div className='totalContainer'>
                            <div className='total'>
                                <span className='totalText'>Total:</span>
                                <span className='totalInvoice'>${total}.00</span>
                            </div>
                        </div>
                        <div className='buttonContainer'>
                            <button type="button" className='btnClear' onClick={deleteAllCart}>Limpiar pedido</button>
                            <button type="button" className='btnSubmit' onClick={handleOnclick}>Enviar pedido</button>
                        </div>
                        <Modal isOpen={isOpenModalOrder} closeModal={closeModalOrder} >
                            <ModalOrder order={order} />
                        </Modal>
                    </>
                )}
            </form>
        </>
    )
}

