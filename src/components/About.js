import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Flex flexDir="column" mt="8rem" w="90%" mx="auto">
      <Flex
        alignItems="center"
        height="100vh"
        flexDir={["column", "column", "row", "row"]}
        textAlign={["center", "center", "left", "left"]}
      >
        <Flex flexDir="column" gap="1rem">
          <Heading as="h2" size="4xl">
            Who we are
          </Heading>
          <Text fontSize="24px" w={["100%", "100%", "100%", "50%"]}>
            We are people, who love pizza and our clients. HappyPizza has been
            established since 2021. It’s main goal was to serve the best pizza
            in town.
          </Text>
          <Wrap dis="flex" margin={["auto", "auto", "0px", "0px"]}>
            <Button ali colorScheme="yellow" as="a">
              Read more
            </Button>
          </Wrap>
        </Flex>
        <Image
          src="assets/about-us.png"
          boxSize={["300px", "300px", "400px", "500px"]}
        ></Image>
      </Flex>
      <Flex
        alignItems="center"
        height="100vh"
        flexDir={["column", "column", "row", "row"]}
        textAlign={["center", "center", "left", "left"]}
      >
        <Flex flexDir="column" gap="1rem">
          <Heading as="h2" size="4xl">
            Who we are
          </Heading>
          <Text fontSize="24px" w={["100%", "100%", "100%", "50%"]}>
            We are people, who love pizza and our clients. HappyPizza has been
            established since 2021. It’s main goal was to serve the best pizza
            in town.
          </Text>
          <Wrap dis="flex" margin={["auto", "auto", "0px", "0px"]}>
            <Button ali colorScheme="yellow" as="a">
              Read more
            </Button>
          </Wrap>
        </Flex>
        <Image
          src="assets/chef.jpg"
          borderRadius="full"
          boxSize={["300px", "300px", "400px", "500px"]}
        ></Image>
      </Flex>
      <Flex
        alignItems="center"
        height="100vh"
        flexDir={["column", "column", "row", "row"]}
        textAlign={["center", "center", "left", "left"]}
      >
        <Flex flexDir="column" gap="1rem">
          <Heading as="h2" size="4xl">
            Who we are
          </Heading>
          <Text fontSize="24px" w={["100%", "100%", "100%", "50%"]}>
            We are people, who love pizza and our clients. HappyPizza has been
            established since 2021. It’s main goal was to serve the best pizza
            in town.
          </Text>
          <Wrap dis="flex" margin={["auto", "auto", "0px", "0px"]}>
            <Button ali colorScheme="yellow" as="a">
              Read more
            </Button>
          </Wrap>
        </Flex>
        <Image
          src="assets/customer.jpg"
          borderRadius="full"
          boxSize={["300px", "300px", "400px", "500px"]}
        ></Image>
      </Flex>
    </Flex>
  );
};

export default About;
