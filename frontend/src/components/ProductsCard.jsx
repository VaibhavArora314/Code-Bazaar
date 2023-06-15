import React from "react";
import { Box, Image, Badge, Text, Stack, Heading } from "@chakra-ui/react";
import DemoProduct from "../assets/Products/Demo.jpg";

function ProductsCard({ product }) {
  return (
    <Box
      textDecoration="none"
      role={"group"}
      pb={8}
      w={{ base: "50", sm: "60", md: "80" }}
      bg={"white"}
      _hover={{
        boxShadow: "2xl",
        transition: "all .3s ease",
      }}
      rounded={"xl"}
      h="fit-content"
      border="1px solid"
      borderColor="gray.200"
    >
      <Box roundedTopLeft={"lg"} roundedTopRight={"lg"}>
        <Image
          roundedTopLeft={"lg"}
          roundedTopRight={"lg"}
          // height={"60"}
          width={"full"}
          objectFit={"cover"}
          src={product.image ? product.image : ""}
          fallbackSrc={DemoProduct}
        />
      </Box>
      <Stack pt={8} align={"center"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          {product.category}
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          {product.title}
        </Heading>
        <Text fontWeight={800} fontSize={"xl"}>
          ${product.price}
        </Text>
      </Stack>
    </Box>
  );
}

export default ProductsCard;
