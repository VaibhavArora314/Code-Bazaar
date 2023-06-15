import React from "react";
import ProductsCard from "../components/ProductsCard";
import NavBar from "../components/NavBar";
import HomeCategoryCards from "../components/HomeCategoryCards";
import { Flex, Heading } from "@chakra-ui/react";
import bgImage from "../assets/BackgroundImage.jpg";
import Footer from "../components/Footer";

function Home(props) {
  const product = {
    title: "Product Title",
    image: "..srcassetsWebsite Logologo-black.png",
    description: "Product description goes here",
    price: 19.99,
    category: "Category",
  };

  return (
    <>
      <Flex
        w="full"
        h="80vh"
        bgImage={bgImage}
        bgSize="cover"
        bgPosition="center center"
        mb="7"
        alignItems="center"
        justifyContent="center"
      >
        <Heading color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
          Welcome to the World of Technology!
        </Heading>
      </Flex>

      <HomeCategoryCards />
      <Footer/>
    </>
  );
}

export default Home;
