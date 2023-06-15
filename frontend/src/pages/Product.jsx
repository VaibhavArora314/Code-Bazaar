import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import DemoProduct from "../assets/Products/Demo.jpg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // Fetch all listings from the API
    axios
      .get(
        `http://localhost:4000/api/listings/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  return (
    <Container maxW={"7xl"} px="20" pb="10">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: "10", md: "16" }}
        pt={{ base: 8, md: 10 }}
      >
        <Flex>
          <Image
            rounded={"3xl"}
            alt={"product image"}
            src={product?.image}
            fallbackSrc={DemoProduct}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "sm", lg: "md" }}
          />
        </Flex>
        <Stack spacing={{ base: 2, md: 4 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontFamily={"heading"}
              fontWeight={"semibold"}
              fontSize={{ base: "xl", lg: "2xl" }}
            >
              {product.title}
            </Heading>
            <Text color={"gray.600"} fontSize={{ base: "sm", lg: "md" }}>
              Owned by {product.sellerName ? product.sellerName : "UserXYZ"}
            </Text>
          </Box>

          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={300}
            fontSize={{ base: "md", lg: "xl" }}
          >
            ₹{product.price}
          </Text>

          <Text color={"gray.900"} fontSize={"md"} fontWeight={"hairline"}>
            <strong>Description: </strong>
            {product.description}
          </Text>

          <Button
            rounded={"lg"}
            w={"fit-content"}
            mt={4}
            size={{ base: "md", xl: "lg" }}
            bg={"#232020"}
            color={"white"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
              bg: "#000",
            }}
          >
            Buy Now
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
