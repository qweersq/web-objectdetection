import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import shield2 from "assets/img/shield 2.png";

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="center"
        b="50%"
        alignItems="center"
        textAlign="center"
        >

      
              <Box
                position="absolute"
                bg="#fff"
                p={4}
                color="black"
                borderRadius="20px"
                h="505px"
                w="585px"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                boxShadow="0px 0px 20px 7px rgba(0, 0, 0, 0.1)"
              >

              <Heading
                color={titleColor}
                fontFamily="Inter"
                fontStyle="normal"
                fontSize="32px"
                mb="10px"
                alignItems="center"
                display="flex"
                justifyContent="center">

                <img
                  src={shield2}
                  alt="shield2"
                  w="46px"
                  h="46px"
                  left="569px"
                  top="288px"
                  position="absolute"></img>
                Object Detection
              </Heading>
              <FormControl>
                <FormLabel  w="54.86px" h="25.71px" left="513.71px" top="368px" fontSize="18px" fontWeight="normal">
                  Email
                </FormLabel>

                <Input
                  w="480px"
                  h="56.57px"
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="Your email adress"
                  size="lg"
                />
                <FormLabel w="99.43px" h="25.71px" left="513.71px" top="493.14px" fontSize="18px" fontWeight="normal">
                  Password
                </FormLabel>
                <Input
                  w="480px"
                  h="56.57px"
                  top="67px"
                  borderRadius="15px"
                  mb="36px"
                  fontSize="sm"
                  type="password"
                  placeholder="Your password"
                  size="lg"
                />

                <Button
                  fontSize="10px"
                  type="submit"
                  bg="teal.300"
                  w="480px"
                  h="56.57px"
                  mb="50.43px"
                  color="white"
                  mt="90px"
                  _hover={{
                    bg: "teal.200",
                  }}
                  _active={{
                    bg: "teal.400",
                  }}>

                  SIGN IN
                </Button>
              </FormControl>
             
            </Box>
          </Flex>
        </Flex>
   
  );
}

export default SignIn;
