import React from 'react';
import Config from '../Config/Config';

const Products = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h4>Model: {props.model}</h4>
            <Config price={props.price} quantity={props.quantity}></Config>
        </div>
    );
};

export default Products;