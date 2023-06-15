import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useContext(AuthContext);

  if (user && user.id) return <Navigate to="/" />;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password && email) login(email, password);
  };

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        w={{ base: "sm", md: "md" }}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log In</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleLogin}>
            <Stack spacing={3}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
              <Stack spacing={8}>
                <Button
                  bg={"#232020"}
                  color={"white"}
                  _hover={{
                    bg: "#000",
                  }}
                  type="submit"
                >
                  Log In
                </Button>
                <Stack>
                  <Text align={"center"}>
                    Don't have an account?{" "}
                    <Link
                      style={{
                        color: "#55aaff",
                      }}
                      to="/register"
                    >
                      Register
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
