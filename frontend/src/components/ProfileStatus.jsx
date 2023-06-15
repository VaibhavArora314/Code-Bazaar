import { Box, Badge, Flex, Heading, Text } from '@chakra-ui/react';

const ProductCard = ({ product, income, rating }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Heading size="md" mb={2}>
        {product}
      </Heading>
      <Flex justifyContent="space-between" mb={2}>
        <Text fontWeight="bold">Current Income:</Text>
        <Text>{income}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontWeight="bold">Rating:</Text>
        <Badge colorScheme="green">{rating}</Badge>
      </Flex>
    </Box>
  );
};

export default ProductCard;
