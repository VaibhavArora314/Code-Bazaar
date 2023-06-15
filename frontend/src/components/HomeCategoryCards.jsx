import React from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import BlackLogo from "../assets/Website Logo/logo-black.png";
import CategoryCard from "./Categorycard";
import AppDev from "../assets/Home_Page_Icons/AppDevelopment.jpg";
import AI from "../assets/Home_Page_Icons/ArtificialIntelligence.jpg";
import WebDev from "../assets/Home_Page_Icons/WebDevelopment.jpg";
import Web3 from "../assets/Home_Page_Icons/Web3&Blockchain.jpg";

const HomeCategoryCards = () => {
  const categories = [
    {
      id: 1,
      title: "Category 1",
      imageSrc: BlackLogo,
    },
    {
      id: 2,
      title: "Category 2",
      imageSrc: BlackLogo,
    },
    {
      id: 3,
      title: "Category 3",
      imageSrc: BlackLogo,
    },
    {
      id: 4,
      title: "Category 4",
      imageSrc: BlackLogo,
    },
    {
      id: 5,
      title: "Category 5",
      imageSrc: BlackLogo,
    },
  ];

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
        <CategoryCard title="AI/ML" image={AI} />
        <CategoryCard title="Web3" image={Web3} />
        <CategoryCard title="Web Dev" image={WebDev} />
        <CategoryCard title="App Dev" image={AppDev} />
      </Flex>
    </>
  );
};

export default HomeCategoryCards;
