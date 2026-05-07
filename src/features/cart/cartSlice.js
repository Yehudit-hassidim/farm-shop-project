import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    // פעולה חדשה: עדכון כמות (הוספה/החסרה)
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload; // amount יהיה 1 או -1
      const item = state.cartItems.find(i => i.id === id);
      if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) item.quantity = 1; // מניעת כמות 0
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;