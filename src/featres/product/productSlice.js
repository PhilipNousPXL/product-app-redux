// src/featres/product/productSlice.js
import {createSlice} from '@reduxjs/toolkit';
import Product from "../../models/product";

const products = [
    new Product(0, "Laptop", 300),
    new Product(1, "Smartphone", 250),
    new Product(2, "Headphones", 100),
    new Product(3, "Keyboard", 70)
];

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: products,
    },
    //reducers are function that are responsible for changing the state of the store
    //e.g. add a new product object to the products array of the store
    reducers: {
        addProduct: (state, action) => {
            const newId = Math.max(...products.map(p => p.id)) + 1;
            const product = action.payload;
            product.id = newId;
            state.value.push(product);
        }
    }
});
export const {addProduct} = productSlice.actions;
export default productSlice.reducer;



