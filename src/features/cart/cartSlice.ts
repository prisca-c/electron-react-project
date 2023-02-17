import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../../types/Cart';

const initialState: Cart = {
  id: 0,
  value: 0,
  items: [],
  itemsCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('addToCart action.payload: ', action.payload);
      state.items.push(action.payload);
      state.itemsCount++;
      state.value += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log('removeFromCart itemIndex: ', itemIndex);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
        state.itemsCount--;
        state.value -= action.payload.price;
      }
    },
    clearCart: (state) => {
      console.log('clearCart');
      state.items = [];
      state.itemsCount = 0;
      state.value = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCart = (state: any) => state.cart;

export default cartSlice.reducer;
