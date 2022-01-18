import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Stack,
  Spinner,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Menu = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState([]);

  const handleSearch = (e) => {
    let value = e.target.value;
    let result = [];
    result = apiData.filter((data) => {
      return data.pizza.search(value) !== -1;
    });
    setFilteredData(result);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (pizza) => {
    dispatch(addToCart(pizza));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/pizzas")
      .then((res) => res.json())
      .then((res) => {
        const data = res.pizzas;
        setApiData(data);
        setFilteredData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Flex flexDirection="column" gap="3rem" my="6rem">
      <Stack dis="flex" alignItems="center">
        <Input
          variant="outline"
          placeholder="Search for Pizza!"
          w={["300px", "300px", "400px", "400px"]}
          onChange={(e) => handleSearch(e)}
        />
      </Stack>
      <Flex flexWrap="wrap" gap="2rem" justifyContent="center" pos="relative">
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="300"
            size="xl"
            pos="absolute"
            right="50%"
          />
        ) : null}
        {filteredData.map((pizza, index) => {
          return (
            <Box
              maxW="300px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={index}
            >
              <Image src={pizza.img} alt={pizza.pizza} />

              <Flex p="6" alignItems="center" justifyContent="space-between">
                <Box dis="flex" margin="auto">
                  <Box display="flex" alignItems="baseline">
                    <Badge
                      borderRadius="full"
                      px="2"
                      colorScheme="teal"
                      mr="4px"
                    >
                      {pizza.vegetarian === true ? "Vege" : "Meat"}
                    </Badge>
                    {pizza.new && (
                      <Badge
                        borderRadius="full"
                        px="2"
                        colorScheme="teal"
                        mr="4px"
                      >
                        New
                      </Badge>
                    )}
                    {pizza.bestseller && (
                      <Badge borderRadius="full" px="2" colorScheme="orange">
                        Bestseller
                      </Badge>
                    )}
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    ></Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    className="capitalize"
                  >
                    {pizza.pizza}
                  </Box>

                  <Box>$ {pizza.price}</Box>

                  <Box display="flex" mt="2" alignItems="center" width="20ch">
                    {pizza.description}
                  </Box>
                </Box>
                <Box>
                  <Button
                    colorScheme="yellow"
                    onClick={() => handleAddToCart(pizza)}
                  >
                    Add
                  </Button>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Menu;
