import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  function addToCart(product) {
    const itemWithFinalPrice = {
      ...product,
      price: product.salePrice ?? product.price, 
    };
    setCart((prev) => [...prev, itemWithFinalPrice]);
  }

  function removeFromCart(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        orderConfirmed,
        setOrderConfirmed,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
