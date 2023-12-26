import React from "react";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";

const FeedPost = ({ image, username, avatar }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box>
        <Image src={image} alt={username} borderRadius={10} />
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
