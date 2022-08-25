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
    <li key={tweet.id}>
      <h6>ID: {tweet.id}</h6>
      <p>Text: {tweet.text}</p>
      <h6>
        CreatedAt:
        {tweet.createdAt
          ? moment(tweet.createdAt.toMillis()).format("YYYY-MM-DD HH:mm")
          : ""}
      </h6>
    </li>
  ));

  return (
    <div>
      <h2>Twitter List {tweets.length}</h2>
      <ul>{tweetList}</ul>
    </div>
  );
};

export default TwitterList;
