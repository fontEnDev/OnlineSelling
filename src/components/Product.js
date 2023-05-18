import React from 'react';
import './Product.scss';

const Product = ({ name, price, imageUrl }) => {
    return (
        <div className="product">
            <img className="product__image" src={imageUrl} alt={name} />
            <h3 className="product__name">{name}</h3>
            <p className="product__price">${price}</p>
            <button className="product__button">Add to Cart</button>
        </div>
    );
};

export default Product;