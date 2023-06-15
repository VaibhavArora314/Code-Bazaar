import React from 'react';
import { Box, Flex, IconButton, Input, InputGroup, InputLeftElement, Text, Button } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="white"
      color="black"
    >
      <Box display="flex" alignItems="center">
        <Text fontSize="lg" fontWeight="bold">Logo</Text>
        <InputGroup ml={20} width="300px" borderRadius="md">
          <InputLeftElement pointerEvents="none" children={<FiSearch />} />
          <Input type="text" placeholder="Search" borderRadius="2xl" />
        </InputGroup>
      </Box>

      <Box display="flex" alignItems="center">
        <Button variant="ghost" mr={4}>Explore</Button>
        <Button variant="ghost" mr={4}>Profile</Button>
        <Button
          colorScheme="blackAlpha"
          variant="outline"
          bgColor="black"
          color="white"
        >
          Login / Signup
        </Button>
      </Box>
    </Flex>
  );
};

export default NavBar;
