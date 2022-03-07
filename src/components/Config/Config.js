import React from 'react';

const Config = (props) => {
    return (
        <div>
            <p>Price: {props.price}</p>
            <p>quantity: {props.quantity}</p>
        </div>
    );
};

export default Config;