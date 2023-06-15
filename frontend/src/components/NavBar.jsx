import React, { useContext } from "react";
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import BlackLogo from "../assets/Website Logo/logo-black-cropped.png";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const NavBar = ({ LoginRegisterPage = false }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={4}
      py={2}
      bg="white"
      color="black"
    >
      <Box display="flex" alignItems="center">
        <Link to="/">
          <Image src={BlackLogo} h={20} p={0} m={0} />
        </Link>
        {!LoginRegisterPage && (
          <InputGroup
            ml={10}
            width={{ base: "150px", sm: "200px", lg: "300px" }}
            borderRadius="lg"
            display={{ base: "none", sm: "block" }}
            _focus={{ outlineColor: "#000" }}
          >
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input type="text" placeholder="Search" borderRadius="2xl" />
          </InputGroup>
        )}
      </Box>

      <Box display="flex" alignItems="center">
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            display={{ base: "block", lg: "none" }}
            onClick={onOpen}
            mr={2}
          />
          <MenuList
            display={{ base: isOpen ? "block" : "none", lg: "flex" }}
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="center"
            justifyContent="center"
            py={2}
          >
            <Link to="/products">
              <MenuItem>Explore</MenuItem>
            </Link>
            {!LoginRegisterPage && (
              <>
                {!isAuthenticated() ? (
                  <Link to="/login">
                    <MenuItem>Login / SignUp</MenuItem>
                  </Link>
                ) : (
                  <>
                    <Link to="/profile">
                      <MenuItem>Profile</MenuItem>
                    </Link>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </>
                )}
              </>
            )}
          </MenuList>
        </Menu>

        <Box
          display={{ base: "none", lg: "flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/products">
            <Button variant="ghost" mr={4}>
              Explore
            </Button>
          </Link>
          {!LoginRegisterPage && (
            <>
              {!isAuthenticated() ? (
                <Link to="/login">
                  <Button
                    variant="outline"
                    bgColor="#232020"
                    color="white"
                    _hover={{ bgColor: "#000" }}
                    borderRadius="xl"
                  >
                    Login / SignUp
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/profile">
                    <Button variant="ghost" mr={4}>
                      Profile
                    </Button>
                  </Link>
                  <Button
                    onClick={logout}
                    variant="outline"
                    bgColor="#232020"
                    color="white"
                    _hover={{ bgColor: "#000" }}
                    borderRadius="xl"
                  >
                    Logout
                  </Button>
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default NavBar;
