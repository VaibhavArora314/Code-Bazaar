import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Flex
      align="center"
      justify="center"
      h="80vh"
      bg="gray.50"
      direction="column"
    >
      <Heading as="h1" size="2xl" mb={4}>
        Page Not Found!
      </Heading>
      <Text fontSize="xl" mb={8}>
        The requested page could not be found.
      </Text>
      <Link to="/">
        <Button
          size={{ base: "md", xl: "lg" }}
          bg={"#232020"}
          color={"white"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
            bg: "#000",
          }}
        >
          Go Back to Homepage
        </Button>
      </Link>
    </Flex>
  );
};

export default NotFoundPage;
