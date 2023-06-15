import axios from "axios";

export async function getAllListings() {
  try {
    const response = await axios.get("https://localhost:4000/api/listings");

    const products = response.data;

    return products;
  } catch (error) {
    console.error(error);
    throw "Product does not exist";
  }
}

export async function getProductById(productId) {
  try {
    const response = await axios.get(
      `https://localhost:4000/api/listings/${productId}`
    );

    const product = response.data;

    return product;
  } catch (error) {
    console.error(error);
    throw "No product exist with this name";
  }
}
