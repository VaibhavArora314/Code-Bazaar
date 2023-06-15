import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';
import axios from 'axios';

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch all listings from the API
    axios.get('http://localhost:4000/api/listings',{},{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => setListings(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Listings</Heading>
      {listings.map(listing => (
        <Box key={listing._id} bg="white" p={4} mb={4} boxShadow="sm">
          <Heading as="h2" size="lg" mb={2}>{listing.title}</Heading>
          <Text fontSize="md" mb={2}>{listing.description}</Text>
          <Text fontSize="md" mb={2}>Price: ${listing.price}</Text>
          <Text fontSize="md" mb={2}>Seller: {listing.seller.name}</Text>
          <Divider my={2} />
        </Box>
      ))}
    </Box>
  );
}

export default Listings;
