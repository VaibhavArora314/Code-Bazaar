import { Box, Flex, Text, Badge } from '@chakra-ui/react';

const ProductCard = ({ name, price, sales }) => {
  const totalIncome = price * sales;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      boxShadow="md"
      maxW="300px"
    >
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        {name}
      </Text>
      <Flex justifyContent="space-between" mb={2}>
        <Text fontWeight="bold">Price:</Text>
        <Text>${price}</Text>
      </Flex>
      <Flex justifyContent="space-between" mb={2}>
        <Text fontWeight="bold">Sales:</Text>
        <Text>{sales}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontWeight="bold">Total Income:</Text>
        <Badge colorScheme="green">${totalIncome}</Badge>
      </Flex>
    </Box>
  );
};

export default ProductCard;
