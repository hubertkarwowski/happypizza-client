import React, { useState, useRef, useEffect } from "react";
//CHAKRA-UI IMPORTS
import {
  Button,
  Flex,
  LinkOverlay,
  IconButton,
  Heading,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
//REACT-ICONS IMPORTS
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
//REACT ROUTER IMPORTS
import { Link } from "react-router-dom";
//REDUX IMPORTS
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";
import StripeButton from "./StripeButton";

const Navbar = () => {
  const [display, changeDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <Flex
      pos="fixed"
      w="100%"
      h="4rem"
      top="0"
      right="0"
      align="center"
      zIndex="30"
    >
      <Flex w="100%" justifyContent="space-between" mx={20}>
        <Flex>
          <Heading color="300">
            <Link to="/"> HappyPizza</Link>
          </Heading>
        </Flex>
        <Flex display={["none", "none", "flex", "flex"]} alignItems="center">
          <Link to="/menu">
            <Button as="a" variant="ghost" aria-label="Home" w="100%" mx={2}>
              <LinkOverlay>Menu</LinkOverlay>
            </Button>
          </Link>
          <Link to="/discounts">
            <Button as="a" variant="ghost" aria-label="Home" w="100%" mx={2}>
              <LinkOverlay>Discounts</LinkOverlay>
            </Button>
          </Link>
          <Link to="/about-us">
            <Button as="a" variant="ghost" aria-label="Home" w="100%" mx={2}>
              <LinkOverlay>About us</LinkOverlay>
            </Button>
          </Link>
          <Icon
            as={FiShoppingCart}
            w={30}
            h={30}
            ref={btnRef}
            onClick={onOpen}
          />
          <Text className="circle">{cartTotalQuantity}</Text>
        </Flex>

        <IconButton
          arial-label="Open Menu"
          size="lg"
          mr={2}
          icon={<FiMenu />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => changeDisplay("flex")}
        ></IconButton>
      </Flex>
      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex="20"
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<VscChromeClose />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link to="/menu">
            <Button
              as="a"
              variant="ghost"
              aria-label="menu"
              w="100%"
              my={4}
              onClick={() => changeDisplay("none")}
            >
              <LinkOverlay>Menu</LinkOverlay>
            </Button>
          </Link>
          <Link to="/discounts">
            <Button
              as="a"
              variant="ghost"
              aria-label="discounts"
              w="100%"
              my={4}
              onClick={() => changeDisplay("none")}
            >
              <LinkOverlay>Discounts</LinkOverlay>
            </Button>
          </Link>
          <Link to="/about-us">
            <Button
              as="a"
              variant="ghost"
              aria-label="about us"
              w="100%"
              my={4}
              onClick={() => changeDisplay("none")}
            >
              <LinkOverlay>About us</LinkOverlay>
            </Button>
          </Link>
          <Icon
            as={FiShoppingCart}
            w={30}
            h={30}
            ref={btnRef}
            onClick={onOpen}
          />
          <Text className="circle">{cartTotalQuantity}</Text>
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {cart.cartItems.length === 0 ? (
              <Heading as="h2">Your cart is empty!</Heading>
            ) : (
              <Flex flexDirection="column" gap="1rem">
                {cart.cartItems.map((cartItem, i) => {
                  return (
                    <Box
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      key={i}
                    >
                      <Flex
                        flexDir={["column", "column", "row", "row"]}
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Image
                          src={cartItem.img}
                          alt={cartItem.pizza}
                          boxSize="100px"
                        />
                        <Flex
                          flexDirection="column"
                          alignItems="center"
                          ml="6px"
                        >
                          <Text className="capitalize">{cartItem.pizza}</Text>
                          <Text>{cartItem.price}</Text>
                        </Flex>
                        <Flex alignItems="center" gap="0.3rem">
                          <Button
                            colorScheme="yellow"
                            onClick={() => handleDecreaseCart(cartItem)}
                          >
                            -
                          </Button>
                          <Text>{cartItem.cartQuantity}</Text>
                          <Button
                            colorScheme="yellow"
                            onClick={() => handleIncreaseCart(cartItem)}
                          >
                            +
                          </Button>
                        </Flex>
                        <Box>
                          <Text>
                            Total $ {cartItem.price * cartItem.cartQuantity}
                          </Text>
                        </Box>
                        <Box mr="6px">
                          <Button
                            colorScheme="red"
                            onClick={() => handleRemoveFromCart(cartItem)}
                          >
                            X
                          </Button>
                        </Box>
                      </Flex>
                    </Box>
                  );
                })}
              </Flex>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Flex gap="1rem" alignItems="center">
              <Button
                variant="outline"
                mr={3}
                onClick={() => handleClearCart()}
              >
                Clear
              </Button>
              <StripeButton price={cart.cartTotalAmount} />
              <Heading>Subtotal $ {cart.cartTotalAmount}</Heading>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
