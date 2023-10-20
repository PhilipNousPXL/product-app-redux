// src/components/AddProductFrom.jsx
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProduct} from "../featres/product/productSlice";
import Product from "../models/product";

export function AddProductForm() {

    //name input of the form is stored in nameInputValue
    const [nameInputValue, setNameInputValue] = useState('');
    const handleChangeInputName = (event) => {
        setNameInputValue(event.target.value);
    };
    //price input of the form is stored in priceInputValue
    const [priceInputValue, setPriceInputValue] = useState('');
    const handleChangeInputPrice = (event) => {
        setPriceInputValue(event.target.value);
    };

    //dispatcher. Passes action payloads to the store
    const dispatch = useDispatch();

    //whenever the forms product gets submitted,
    //a new product is created and the addProduct function is called
    //addProduct is treated as an action
    const handleSubmit = (event) => {
        event.preventDefault();
        const product = new Product();
        product.name = nameInputValue;
        product.price = priceInputValue;
        dispatch(addProduct(product));
    }

    return (
        <>
            <h2>Add a new product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Name</p>
                    <input type="text" value={nameInputValue} onChange={handleChangeInputName}/>
                </label>
                <label>
                    <p>Price</p>
                    <input type="number" value={priceInputValue} onChange={handleChangeInputPrice}/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
