import React, { useEffect, useState } from "react";
import { Grid, Skeleton, VStack, Box } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx}>
            <Skeleton w={"full"} alignItems={"flex-start"}>
              <Box h="300px">Wrapped Content</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/img1.png" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
