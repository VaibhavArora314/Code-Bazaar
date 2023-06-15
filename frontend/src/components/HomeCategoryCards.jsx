import React from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import BlackLogo from "../assets/Website Logo/logo-black.png";
import CategoryCard from "./Categorycard";
import AppDev from "../assets/Home_Page_Icons/AppDevelopment.jpg";
import AI from "../assets/Home_Page_Icons/ArtificialIntelligence.jpg";
import WebDev from "../assets/Home_Page_Icons/WebDevelopment.jpg";
import Web3 from "../assets/Home_Page_Icons/Web3&Blockchain.jpg";
import { Link } from "react-router-dom";

const HomeCategoryCards = () => {
  return (
    <>
      <Flex m="10" alignItems="center" justifyContent="center">
        <Heading me="md">Explore Categories</Heading>
      </Flex>
      <Flex
        gap="1"
        p="2"
        wrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Link to="/products?c=AI/ML">
          <CategoryCard title="AI/ML" image={AI} />
        </Link>
        <Link to="/products?c=Web3">
          <CategoryCard title="Web3" image={Web3} />
        </Link>
        <Link to="/products?c=Web Dev">
          <CategoryCard title="Web Dev" image={WebDev} />
        </Link>
        <Link to="/products?c=App Dev">
          <CategoryCard title="App Dev" image={AppDev} />
        </Link>
      </Flex>
    </>
  );
};

export default HomeCategoryCards;
