import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.200" py={6}>
      <Flex justifyContent="center" alignItems="center">
        <Text>&copy; 2023 Your Company. All rights reserved.</Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" mt={2}>
        <Link href="#">Terms of Service</Link>
        <Text mx={2}>&bull;</Text>
        <Link href="#">Privacy Policy</Link>
        <Text mx={2}>&bull;</Text>
        <Link href="#">Cookie Policy</Link>
      </Flex>
    </Box>
  );
};

export default Footer;
