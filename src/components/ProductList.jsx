// src/components/ProductList.jsx
import React from 'react';
import {useSelector} from 'react-redux';

export function ProductList() {
    //get the products from the store
    const products = useSelector((state) => state.product.value);

    const productListItems = products.map(product =>
        <li key={product.id}>
            <p>{product.name}, {product.price}$</p>
        </li>
    );

    return (
        <>
            <h2>Products</h2>
            <ul>
                {productListItems}
            </ul>
        </>
    );
}
