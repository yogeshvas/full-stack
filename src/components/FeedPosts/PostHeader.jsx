import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      my={2}
      alignItems={"center"}
      w={"full "}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt="userPic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {username}
          <Box color={"gray.500"}>. 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
