import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import axios from 'axios';

const ProductPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server with the product data
      const response = await axios.post('http://localhost:4000/api/products', {
        title,
        description,
        price,
        category,
      },{
        "headers": {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      // Handle the response
      console.log(response.data); // Assuming the server sends back the created product data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add a New Product</h1>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Category</FormLabel>
          <Input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default ProductPage;
