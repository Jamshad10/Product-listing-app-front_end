import { configureStore } from '@reduxjs/toolkit';
import CategorySlice from './CategorySlice';
import productSlice from './productSlice';
import itemSlice from './itemSlice';

const store = configureStore({
    reducer: {
        category: CategorySlice,
        products: productSlice,
        items:itemSlice
    }
});

export default store;