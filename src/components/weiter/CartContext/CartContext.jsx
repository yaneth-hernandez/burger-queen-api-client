import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        !cartItems ? '' :
            setTotal(
                cartItems.reduce((previous, current) => previous + parseInt(current.qty), 0)
            )
    }, [cartItems])

    const addItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.product.id === product.id
        )
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if (productInCart.product.id === product.id) {
                        return { ...productInCart, qty: productInCart.qty += 1 }
                    } else {
                        return productInCart
                    }
                })
            )
        } else {
            setCartItems([...cartItems, { product: product, qty: 1 }])
        }
    }

    const deleteItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.product.id === product.id)
        if (inCart) {
            if (inCart.qty === 1) {
                setCartItems(
                    cartItems.filter(productInCart => productInCart.product.id !== product.id)
                )
            } else {
                setCartItems(
                    cartItems.map((productInCart) => {
                        if (productInCart.product.id === product.id) {
                            return { ...productInCart, qty: productInCart.qty -= 1 }
                        } else {
                            return productInCart
                        }
                    })
                )
            }
        } else {
            setCartItems([...cartItems])
        }
    }

    return (
        <CartContext.Provider value={{ cartItems, total, addItemToCart, deleteItemToCart }}>
            {children}
        </CartContext.Provider>
    )
}
