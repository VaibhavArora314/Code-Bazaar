import React from "react";
import ProductsCard from "../components/ProductsCard";
import NavBar from "../components/NavBar";
import HomeCategoryCards from "../components/HomeCategoryCards";

function Home(props) {
  const product = {
    title: "Product Title",
    image: "..srcassetsWebsite Logologo-black.png",
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
      <HomeCategoryCards/>
    </div>
  );
}

export default Home;
