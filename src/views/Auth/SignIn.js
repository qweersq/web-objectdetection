import React from "react";
import axios from "axios";
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
import OBJ from "assets/img/Object Detection.png";

function SignIn() {
  // Chakra color mode

  const textColor = useColorModeValue("gray.400", "white");
  const inputStyle = {border: "1px solid #000",borderRadius: "10px",height: "56.57px",width: "480px",margin: "15px",};
  const OBJStyle = { top: "2px", left: "26%", position: "absolute" };
  const shieldStyle = { top: "-1px", left: "18%", position: "absolute" };
  const boxStyle = {border: "1px solid #FFFFFF",borderRadius: "20px",height: "505px",width: "585px",boxShadow: "0px 0px 20px 7px rgba(0, 0, 0, 0.1)",};
  // Login jwt
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      const { token } = response.data;
      // Simpan token dalam local storage
      localStorage.setItem('token', token);
      // Redirect ke halaman dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error(error);
    }
  };

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
          style={boxStyle}
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Heading
            position="relative"
            top="33px"
            mb="10px"
            display="flex"
            justifyContent="center"
          >
            <img src={shield2} alt="shield2" w="46px" h="46px" style={shieldStyle}></img>
            <img src={OBJ} alt="OBJ" w="46px" h="46px" style={OBJStyle}></img>
          </Heading>
          <FormControl>
            <FormLabel
              position="relative"
              w="54.86px"
              h="25.71px"
              left="42px"
              top="102px"
              fontSize="18px"
              fontWeight="700"
            >
              Email
            </FormLabel>

            <Input
              style={inputStyle}
              top="90px"
              mb="24px"
              fontSize="sm"
              type="text"
              size="lg"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel
              position="relative"
              w="99.43px"
              h="25.71px"
              left="42px"
              top="102px"
              fontSize="18px"
              fontWeight="700"
            >
              Password
            </FormLabel>
            <Input
              style={inputStyle}
              top="90px"
              mb="36px"
              fontSize="sm"
              type="password"
              size="lg"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              fontSize="18px"
              type="submit"
              bg="linear-gradient(89.95deg, #00DC7F -1.21%, #00A861 99.96%)"
              w="480px"
              h="56.57px"
              mb="50.43px"
              color="white"
              top="129px"
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
              onClick={() => {
                window.location.href = `/dashboard`;
              }}
              onSubmit={handleLogin}
            >
              Sign In
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
