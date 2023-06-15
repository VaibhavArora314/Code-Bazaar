import React from 'react';
import ProductsCard from '../components/ProductsCard';

function Home(props) {
    const product = {
        title: "Product Title",
        image: "..\src\assets\Website Logo\logo-black.png",
        description: "Product description goes here",
        price: 19.99,
        category: "Category",
    };

    return (
        <div>
            Home
            <ProductsCard
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            category={product.category}
        />
        </div>
    );
}

export default Home;