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

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
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
          <Input
            placeholder="Email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            fontSize={14}
            type="email"
          />
          <Input
            placeholder="Password"
            fontSize={14}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            type="password"
          />
          {!isLogin ? (
            <Input
              placeholder="Confirm Password  "
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Login" : "SignUp"}
          </Button>

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
          <Box onClick={() => setIsLogin(!isLogin)} color={"blue.400"}>
            {isLogin ? "Sign up" : "Login In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
