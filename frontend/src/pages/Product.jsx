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
// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { MdLocalShipping } from "react-icons/md";
import DemoProduct from "../assets/Products/Demo.jpg";

export default function ProductPage() {
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
            src={DemoProduct}
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
              Automatic Watch
            </Heading>
            <Text color={"gray.600"} fontSize={{ base: "sm", lg: "md" }}>
              Owned by UserXYZ
            </Text>
          </Box>

          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={300}
            fontSize={{ base: "md", lg: "xl" }}
          >
            $350.00 USD
          </Text>

          <Text color={"gray.900"} fontSize={"md"} fontWeight={"hairline"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid
            amet at delectus doloribus dolorum expedita hic, ipsum maxime modi
            nam officiis porro, quae, quisquam quos reprehenderit velit? Natus,
            totam.
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
