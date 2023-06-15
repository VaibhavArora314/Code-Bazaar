import React from "react";
import { Box, Image, Badge, Text, Stack, Heading } from "@chakra-ui/react";
import DemoProduct from "../assets/Products/Demo.jpg";

function CategoryCard(props) {
  const { title, image } = props;

  return (
    <Box
      role={"group"}
      w={"60"}
      bg={"white"}
      _hover={{
        boxShadow: "2xl",
        transition: "all .3s ease",
      }}
      rounded={"xl"}
      h="fit-content"
      border="1px solid"
      borderColor="gray.200"
      mb="5"
    >
      <Box roundedTopLeft={"lg"} roundedTopRight={"lg"}>
        <Image
          roundedTopLeft={"lg"}
          roundedTopRight={"lg"}
          // height={"60"}
          width={"full"}
          h="52"
          objectFit={"cover"}
          src={image}
          fallbackSrc={DemoProduct}
        />
      </Box>
      <Stack p={2} align={"center"}>
        <Heading
        pt="3"
          color={"gray.900"}
          fontSize={"lg"}
          textTransform={"uppercase"}
          alignSelf="center"
        >
          {title}
        </Heading>
      </Stack>
    </Box>
  );
}

export default CategoryCard;
