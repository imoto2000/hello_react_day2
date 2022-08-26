import { useEffect } from "react";
import moment from "moment";

import { useDispatch } from "react-redux";
import { fetch } from "@/store/tweet";
import { useSelector } from "react-redux";

import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";

const TwitterList = () => {
  const dispatch = useDispatch();

  const tweets = useSelector((state) => {
    return state.tweet.tweets;
  });

  useEffect(() => {
    dispatch(fetch());
    return () => {
      //
    };
  }, [dispatch]);

  const tweetList = tweets.map((tweet) => (
    <Box
      key={tweet.id}
      px="5"
      py={10}
      my={1}
      borderWidth="0.5px"
      borderRadius={5}
      borderColor="gray.300"
    >
      <HStack>
        <Stack>
          <Avatar
            size="md"
            name="aaaa"
            src="https://bit.ly/dan-abramov"
          ></Avatar>
        </Stack>
        <Stack pl={5}>
          <Text>
            <h4>
              imoto
              <small>
                {tweet.createdAt
                  ? moment(tweet.createdAt.toMillis()).format(
                      "YYYY-MM-DD HH:mm"
                    )
                  : ""}
              </small>
            </h4>
          </Text>

          <Text>{tweet.text}</Text>
        </Stack>
      </HStack>
    </Box>
  ));

  return <div>{tweetList}</div>;
};

export default TwitterList;
