import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const GoogleAuth = () => {
  return (
    <Flex alignItems={"center"} justifySelf={"center"} cursor={"pointer"}>
      <Image src="/google.png" w={5} alt="Google logo" />
      <Text mx={2} color={"blue.500"}>
        Log in with Google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
