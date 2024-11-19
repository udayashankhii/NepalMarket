import { atom, useAtom } from 'jotai';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const cartAtom = atom<CartItem[]>([]);

export function useCart() {
  const [cart, setCart] = useAtom(cartAtom);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    total,
  };
}