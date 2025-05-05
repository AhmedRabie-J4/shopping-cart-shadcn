import { create } from "zustand";

export const useStoreCart = create((set) => ({
  cart: [],
  addtoCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProduct >= 0) {
        const updateItems = [...state.cart];
        updateItems[existingProduct].quantity += 1;
        return { cart: updateItems };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),

  removeItem: (productId) =>
    set((state) => {
      const filteredItems = state.cart.filter((item) => item.id !== productId);
      return { cart: filteredItems };
    }),
}));
