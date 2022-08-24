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

const TwitterList = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // const q = query(collection(db, "tweets"), where("status", "==", 1));

    const getTweets = async () => {
      setTweets([]);
      const newTweets = [];
      const q = query(collection(db, "tweets"));
      await getDocs(q).then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(">>>>>> doc.id", doc.id);
          if (doc.id) {
            newTweets.push(doc.data());
          }
        });
      });

      setTweets(newTweets);
    };

    getTweets();

    return () => {
      //
    };
  }, []);

  const tweetList = tweets.map((tweet) => (
    <li key={tweet.id}>
      <h6>ID: {tweet.id}</h6>
      <p>Text: {tweet.text}</p>
      <h6>
        CreatedAt:{" "}
        {moment(tweet.createdAt.toMillis()).format("YYYY-MM-DD HH:mm")}
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
