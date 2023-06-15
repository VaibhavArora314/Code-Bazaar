import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import BlackLogo from "../assets/Website Logo/logo-black.png";

const HomeCategoryCards = () => {
  const categories = [
    {
      id: 1,
      title: "Category 1",
      imageSrc: BlackLogo,
    },
    {
      id: 2,
      title: "Category 2",
      imageSrc: BlackLogo,
    },
    {
      id: 3,
      title: "Category 3",
      imageSrc: BlackLogo,
    },
    {
      id: 4,
      title: "Category 4",
      imageSrc: BlackLogo,
    },
    {
      id: 5,
      title: "Category 5",
      imageSrc: BlackLogo,
    },
  ];

  return (
    <Swiper
      spaceBetween={0} // Adjust the spacing value here
      slidesPerView={5}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <Box maxW="200px" p={4} borderWidth={1} borderRadius="3xl">
            <Image
              src={category.imageSrc}
              alt={category.title}
              borderRadius="3xl"
            />
            <Text
              mt={2}
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
              borderRadius="3xl"
            >
              {category.title}
            </Text>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCategoryCards;
