import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import BlackLogo from "../assets/Website Logo/logo-black-cropped.png";
import { Link } from "react-router-dom";

const NavBar = ({ LoginRegisterPage = false }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px="4"
      py="2"
      bg="white"
      color="black"
    >
      <Box display="flex" alignItems="center">
        <Link to="/">
          <Image src={BlackLogo} h={20} p="0" m="0" />
        </Link>
        {/* <Text fontSize="lg" fontWeight="bold">
          Logo
        </Text> */}
        {!LoginRegisterPage && (
          <InputGroup
            ml={10}
            width="300px"
            borderRadius="md"
            _focus={{
              outlineColor: "#000",
            }}
          >
            <InputLeftElement pointerEvents="none" children={<FiSearch />} />
            <Input type="text" placeholder="Search" borderRadius="2xl" />
          </InputGroup>
        )}
      </Box>

      <Box display="flex" alignItems="center">
        <Link to="/products">
          <Button variant="ghost" mr={4}>
            Explore
          </Button>
        </Link>
        {!LoginRegisterPage && (
          <>
            <Link to="/profile">
              <Button variant="ghost" mr={4}>
                Profile
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                bgColor="#232020"
                color="white"
                _hover={{
                  bgColor: "#000",
                }}
                borderRadius="xl"
              >
                Login / SignUp
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default NavBar;
