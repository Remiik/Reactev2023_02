import React, { createContext, useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  amount: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product, id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  checkoutCart: () => void;
  increaseAmount: (id: string) => void;
  decreaseAmount: (id: string) => void;
  itemAmount: number;
  total: number;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  checkoutCart: () => {},
  increaseAmount: () => {},
  decreaseAmount: () => {},
  itemAmount: 0,
  total: 0,
});

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [itemAmount, setItemAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product: Product, id: string) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id: string) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkoutCart = () => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
    if (total !== 0) {
      setCart([]);
    }
  };

  const increaseAmount = (id: string) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem!, id);
  };

  const decreaseAmount = (id: string) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem!.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        checkoutCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;