// UpdateForm.jsx
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const UpdateForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdate = () => {
    // Handle the update logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
  };

  return (
    <Box h={"90vh"} maxW="md" mx="auto" mt={8}>
      <FormControl mb={4}>  
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Old Password</FormLabel>
        <Input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>New Password</FormLabel>
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </FormControl>
      <Button
                  variant="outline"
                  bgColor="#232020"
                  color="white"
                  _hover={{ bgColor: "#000" }}
                  borderRadius="xl"
                >
        Update
      </Button>
    </Box>
  );
};

export default UpdateForm;