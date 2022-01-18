import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discounts = () => {
  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Flex mt="6rem" justifyContent="center" alignItems="center">
      <Box w="900px">
        <Slider {...settings}>
          <Box>
            <Image src="assets/promotion.png" />
          </Box>
          <Box>
            <Image src="assets/promotion2.png" />
          </Box>
        </Slider>
      </Box>
    </Flex>
  );
};

export default Discounts;
