import {
  Avatar,
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comments from "../Comments/Comments";
import PostFooter from "../FeedPosts/PostFooter";
const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
      >
        <Flex
          opacity={0}
          _hover={{
            opacity: 1,
          }}
          position={"absolute"}
          top={0}
          bottom={0}
          left={0}
          right={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
          onClick={onOpen}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image src={img} w={"100%"} h={"100%"} objectFit={"cover"} />
      </GridItem>
      <Modal
        size={{ base: "3xl", md: "5xl" }}
        isCentered={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            {/* <Lorem count={2} /> */}
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                border={"1px solid"}
              >
                <Image src={img} />
              </Box>
              <Flex
                flex={1}
                flexDirection={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Avatar src="/profilepic.png" fontSize={12} />
                    <Text fontWeight={"bold"} fontSize={12}>
                      asmrProgramming
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />
                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflow={"auto"}
                >
                  <Comments
                    createdAt="1 day ago"
                    username={"suraj"}
                    profilePic={"/profilepic.png"}
                    text={"this is a dummy comment"}
                  />
                  <Comments
                    createdAt="1 day ago"
                    username={"suraj"}
                    profilePic={"/profilepic.png"}
                    text={"this is a dummy comment"}
                  />
                  <Comments
                    createdAt="1 day ago"
                    username={"suraj"}
                    profilePic={"/profilepic.png"}
                    text={"this is a dummy comment"}
                  />
                </VStack>
                <Divider mt={4} bg={"gray.800"} />
                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
