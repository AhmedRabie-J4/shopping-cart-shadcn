import { create } from "zustand";

// Product interface
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

// Cart item interface
interface CartItem {
  product: Product;
  quantity: number;
}

// Zustand store state interface
interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],

  // Add item to cart or increase quantity if it already exists
  addItem: (product) =>
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return { items: updatedItems };
      } else {
        return { items: [...state.items, { product, quantity: 1 }] };
      }
    }),

  // Remove item from cart completely
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),
}));

export default useCartStore;
