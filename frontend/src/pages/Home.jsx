import React from "react";
import HomeCategoryCards from "../components/HomeCategoryCards";
import { Flex, Heading } from "@chakra-ui/react";
import bgImage from "../assets/BackgroundImage.jpg";
import Login from "../components/Logintest";
import Registration from "../components/RegisterTest";
import Listings from "../components/AllListingTesting";
import ProductPage from "../components/Addproducttesting";

function Home(props) {
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
        textAlign="center"
      >
        <Heading color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
          Welcome to the World of Technology!
        </Heading>
      </Flex>
      <HomeCategoryCards />
      <ProductPage/>
    </>
  );
}

export default Home;
