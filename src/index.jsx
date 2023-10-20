// src/index.jsx
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import store from './store/store';
import { Provider } from 'react-redux';

//create a root element
const root = createRoot(document.getElementById('root'));
//mount the <Provider/> component with the app on this root element
root.render(
    //the provider is a component is which the store gets injected
    //this makes the store available for the whole react application
    <Provider store={store}>
        <App />
    </Provider>
);


