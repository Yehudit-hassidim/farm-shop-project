import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../../public/db.json';

const initialState = {
  items: productsData.products, // כאן אנחנו לוקחים את המוצרים מה-JSON
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;