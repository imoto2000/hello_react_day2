import { useEffect } from "react";
import { useState } from "react";
import { db } from "@/plugins/firebase";
import {
  query,
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { async } from "@firebase/util";
import moment from "moment";

import { useDispatch } from "react-redux";
import { fetch } from "@/store/tweet";
import { useSelector } from "react-redux";

import { Box, Text } from "@chakra-ui/react";

const TwitterList = () => {
  // const [tweets, setTweets] = useState([]);
  const dispatch = useDispatch();

  const tweets = useSelector((state) => {
    // console.log(">>>>>>>>>>>  state.tweet.tweets", state.tweet.tweets);

    return state.tweet.tweets;
  });

  useEffect(() => {
    dispatch(fetch());
    return () => {
      //
    };
  }, [dispatch]);

  const tweetList = tweets.map((tweet) => (
    <Box key={tweet.id} p="5" borderWidth="1px" borderColor="gray.500">
      <Text fontSize="sm" color="gray.400">
        ID: {tweet.id}
      </Text>
      <Text p={5}>{tweet.text}</Text>
      <Text fontSize="sm" color="gray.400">
        CreatedAt:
        {tweet.createdAt
          ? moment(tweet.createdAt.toMillis()).format("YYYY-MM-DD HH:mm")
          : ""}
      </Text>
    </Box>
  ));

  return (
    <div>
      <h2>Twitter List {tweets.length}</h2>
      {tweetList}
    </div>
  );
};

export default TwitterList;
