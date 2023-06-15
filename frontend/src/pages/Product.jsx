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
    <Container maxW={"7xl"} px="20">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: "10", md: "16" }}
        pt={{ base: 8, md: 10 }}
      >
        <Flex>
          <Image
            rounded={"md"}
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
          {/* <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={{ base: "md", lg: "lg" }}
                fontWeight={"300"}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack> */}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
