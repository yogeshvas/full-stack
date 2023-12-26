import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested For You
        </Text>
        <Text
          fontSize={12}
          fontWeight={"Bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="Raj"
        followers={1392}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Suman"
        followers={1392}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Suraj"
        followers={1392}
        avatar="https://bit.ly/dan-abramov"
      />

      <Box fontSize={12} alignSelf={"start"} color={"gray.500"} mt={5}>
        @ 2023 Buily by Yogesh Vashisth
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
