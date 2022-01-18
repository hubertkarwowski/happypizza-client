import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import "../index.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = (props) => {
  return (
    <Flex flexDirection="column" bgColor="300">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="2rem"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Heading
          as="h2"
          color="white"
          fontSize={["1.5rem", "2rem", "2rem", "2.5rem"]}
        >
          HappyPizza
        </Heading>
        <Flex
          gap="1rem"
          my="2rem"
          flexDirection={["column", "column", "row", "row"]}
        >
          <Text color="white">Lorem ipsum</Text>
          <Text color="white">Lorem ipsum</Text>
          <Text color="white">Lorem ipsum</Text>
          <Text color="white">Lorem ipsum</Text>
        </Flex>
        <Flex gap="1rem">
          <Icon w={35} h={35} color="white" as={BsFacebook} />
          <Icon w={35} h={35} color="white" as={BsInstagram} />
          <Icon w={35} h={35} color="white" as={BsTwitter} />
        </Flex>
      </Flex>
      <Box>
        <Map
          google={props.google}
          className="map"
          zoom={10}
          initialCenter={{
            lat: 52.229675,
            lng: 21.01223,
          }}
        >
          <Marker
            title={"HappyPizza"}
            name={"HappyPizza"}
            position={{ lat: 52.229675, lng: 21.01223 }}
          />
        </Map>
      </Box>
    </Flex>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB4cqd-LmnnFGh8aNKKHsZO_V9WsVCZVWA",
})(Footer);
