import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart([...cart, item]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalItem = () => {
    return cart.reduce((accountant, item) => accountant + item.accountant, 0);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((accountant,item ) => accountant + (item.accountant*item.price),0)
    return totalPrice
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        clear,
        deleteItem,
        totalItem,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
