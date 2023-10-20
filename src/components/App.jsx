import React from "react";
import {ProductList} from "./ProductList";
import {AddProductForm} from "./AddProductForm";

//app component.
//this is basically the start of the React application
export default function app() {
    return (
        <>
            <h1>Redux store</h1>
            <ProductList></ProductList>
            <hr/>
            <AddProductForm></AddProductForm>
        </>
    );
}
