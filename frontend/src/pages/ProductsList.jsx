import { Flex, Heading, Select } from "@chakra-ui/react";
import ProductsCard from "../components/ProductsCard";
import { useState } from "react";

const CATEGORIES = ["AI/ML", "Web Dev", "App Dev", "Web3"];

export default function ProductsList() {
  const [selectedCategory, setSelectedCategogry] = useState("");

  return (
    <Flex m="4" p="2">
      <Flex w="md" direction="column" p="2" gap="4">
        <Heading size="md">Filters</Heading>
        <Select
          placeholder="Select Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategogry(e.target.value)}
        >
          {CATEGORIES.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex
        gap="4"
        p="2"
        me="0"
        wrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </Flex>
    </Flex>
  );
}
