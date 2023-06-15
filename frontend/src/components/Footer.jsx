import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.200" py={6}>
      <Flex justifyContent="center" alignItems="center">
        <Text>&copy; 2023 CodeBazaar. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
