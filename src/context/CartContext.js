import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        setCart([...cart, item])
    }

    const deleteItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
      }

      return (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            clear,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
