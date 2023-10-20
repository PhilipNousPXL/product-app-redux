// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../featres/product/productSlice';

export default configureStore({
    reducer: {
        product: productReducer
    },
});


