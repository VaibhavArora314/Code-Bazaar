import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading } from '@chakra-ui/react';
import axios from 'axios';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/users/register', {
        name,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data); // Handle the response data according to your requirements
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Heading as="h1" mb={6}>
        Registration
      </Heading>
      <form onSubmit={handleRegistration}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg">
            Register
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Registration;
