import { useEffect, useState } from 'react'
import { HeaderWaiterMenu } from '../HeaderWaiter/HeaderWaiterMenu'
import { Menu } from '../Menu/Menu'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { requestGetProducts } from '../../../helpers/API_request/productRequest'
import { CartProvider } from '../CartContext/CartContext'
import '../ShoppingCart/ShoppingCart.scss'
import { useScreenSize } from '../../../helpers/screen/useScreeSize'

export const ViewWaiterMenu = () => {
    const token = localStorage.getItem('Token')
    const [menu, setMenu] = useState([])
    const [typeMenu, setTypeMenu] = useState('Desayuno')
    const [width, height] = useScreenSize();
    console.log(`width: ${width}, height: ${height}`);

    useEffect(() => {
        requestGetProducts(token)
            .then(res => res.json())
            .then((res) => {
                setMenu(res.filter(element => {
                    if (element.type === typeMenu) {

                        return {
                            name: element.name,
                            id: element.id,
                            price: element.price,
                            image: element.image,
                            type: element.type,
                        }
                    }
                }));
            })
    }, [typeMenu])
    return (
        <CartProvider>
            <>
            <HeaderWaiterMenu setTypeMenu={setTypeMenu} typeMenu={typeMenu} width={width}/>
                <div className='orderContainer'>
                    <Menu menu={menu} typeMenu={typeMenu} />
                    <ShoppingCart typeMenu={typeMenu} />
                </div>
            </>
        </CartProvider>
    )
}