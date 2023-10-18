import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {

        addProduct: (state, action) => {
            state.products.push(action.payload);
        },

        getProduct: (state, action) => {
            state.products = action.payload.map((item) => {
                return {
                    id: item._id,
                    category: item.category,
                    products: item.products
                }
            })
        }

    },
});

export const { addProduct, getProduct } = productsSlice.actions;

export default productsSlice.reducer;
