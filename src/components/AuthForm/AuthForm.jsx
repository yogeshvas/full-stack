import {
  Box,
  Image,
  Input,
  VStack,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  // const handleAuth = () => {
  //   if (!inputs.email || !inputs.password) {
  //     alert("Please Fill all the feilds");
  //     return;
  //   }
  //   navigate("/");
  // };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />

          {isLogin ? <Login /> : <SignUp />}

          {/* ------------OR TEXT -------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex alignItems={"center"} justifySelf={"center"} cursor={"pointer"}>
            <Image src="/google.png" w={5} alt="Google logo" />
            <Text mx={2} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      {/*  */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Dont Have an Account" : "Already Have an Account? "}
          </Box>
          <Box
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.400"}
          >
            {isLogin ? "Sign up" : "Login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
