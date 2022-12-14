import './ModalStyle.scss'

export const ItemModal = ({ item }) => {
    return (
        <>
            <p className='quantity'>{item.qty}</p>
            <p className='product'>{item.product}</p>
            <p className='price'>${item.price}.00</p>
        </>
    )
}