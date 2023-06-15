import React from "react";
import { Box, Image, Badge, Text, Stack, Heading } from "@chakra-ui/react";
import DemoProduct from "../assets/Products/Demo.jpg";

function ProductsCard(props) {
  // const { title, image, description, price, category } = props;

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
          src=""
          fallbackSrc={DemoProduct}
        />
      </Box>
      <Stack pt={8} align={"center"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          category
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          Title
        </Heading>
        <Stack direction={"row"} align={"center"}>
          <Text fontWeight={800} fontSize={"xl"}>
            $57
          </Text>
          <Text textDecoration={"line-through"} color={"gray.600"}>
            $199
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ProductsCard;
