import React from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";
import DemoProduct from "../assets/Products/Demo.jpg";

function ProductsCard(props) {
  const { title, image, description, price, category } = props;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      <Image
        src={image}
        alt={title}
        fallbackSrc={DemoProduct}
        w="100"
        h="100"
        fit="cover"
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {category}
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Text mt="1">{description}</Text>

        <Box d="flex" mt="2" alignItems="center">
          <Box fontWeight="semibold" as="h4" fontSize="lg">
            ${price}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductsCard;
