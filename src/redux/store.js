import { configureStore } from '@reduxjs/toolkit';
import CategorySlice from './CategorySlice';
import productSlice from './productSlice';

const store = configureStore({
    reducer: {
        category: CategorySlice,
        products: productSlice
    }
});

export default store;