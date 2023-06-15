import { Flex, Heading, Select } from "@chakra-ui/react";
import ProductsCard from "../components/ProductsCard";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const CATEGORIES = ["AI/ML", "Web Dev", "App Dev", "Web3"];

export default function ProductsList() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategogry] = useState(
    searchParams.get("c") ? searchParams.get("c") : ""
  );
  const [products, setProducts] = useState([]);

  const searchQuery = searchParams.get("s") ? searchParams.get("s") : "";

  useEffect(() => {
    // Fetch all listings from the API
    axios
      .get(
        "http://localhost:4000/api/listings",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Flex m="4" p="2" pb="5" direction={{ base: "column", sm: "row" }}>
      <Flex w={{ base: "full", sm: "md" }} direction="column" p="2" gap="4">
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
        {products
          .filter(
            (product) =>
              product.title.includes(searchQuery) &&
              (selectedCategory === ""
                ? true
                : selectedCategory === product.category)
          )
          .map((product) => (
            <Link to={`/products/${product._id}`} key={product._id}>
              <ProductsCard product={product} />
            </Link>
          ))}
      </Flex>
    </Flex>
  );
}
