import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{ items, setItems, isCartOpen, setIsCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
