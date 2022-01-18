import { Button, Flex, Heading, Image, LinkOverlay } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      mt="6rem"
      flexDirection={["column", "column", "row", "row"]}
    >
      <Flex
        flexDirection="column"
        gap="2rem"
        textAlign={["center", "center", "left", "left"]}
      >
        <Heading as="h1" fontSize={["1.5rem", "2rem", "2.5rem", "3.5rem"]}>
          Hungry? Order
          <Heading
            as="p"
            color="300"
            fontSize={["1.5rem", "2rem", "2.5rem", "3.5rem"]}
          >
            the Best Pizza
          </Heading>
          in Your Town
        </Heading>
        <Link to="/menu">
          <Button colorScheme="yellow" as="a" aria-label="Menu">
            <LinkOverlay>Order now</LinkOverlay>
          </Button>
        </Link>
      </Flex>
      <Image
        src="assets/hero.svg"
        alt="Shop illustration"
        boxSize={["300px", "500px", "500px", "600px"]}
      />
    </Flex>
  );
};

export default Hero;
