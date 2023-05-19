import React from 'react';
import Product from './Product';
import './ProductList.scss';

const productsData = [
    {
        id: 1,
        name: 'Vi Da',
        price: 9.99,
        imageUrl: 'E:/VSCode/OnlineSelling/src/images/vi_4.jpg',
    },
    {
        id: 2,
        name: 'Vi Vai',
        price: 19.99,
        imageUrl: 'E:/VSCode/OnlineSelling/src/images/vi_5.jpg',
    },
    {
        id: 3,
        name: 'Vi Da Cao Cap',
        price: 9.99,
        imageUrl: 'E:/VSCode/OnlineSelling/src/images/vi_6.jpg',
    },
    {
        id: 4,
        name: 'Vi Da Don Gian',
        price: 9.99,
        imageUrl: 'E:/VSCode/OnlineSelling/src/images/vi_7.jpg',
    },
    {
        id: 5,
        name: 'Vi Da Than Thien',
        price: 9.99,
        imageUrl: 'E:/VSCode/OnlineSelling/src/images/vi_8.jpg',
    }
];

const ProductList = () => {
    return (
        <div className="product-list">
            {productsData.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                />
            ))}
        </div>
    );
};

export default ProductList;