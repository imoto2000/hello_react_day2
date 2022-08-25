import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/plugins/firebase";
import {
  orderBy,
  query,
  onSnapshot,
  getDocs,
  collection,
  deleteDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

const tweet = createSlice({
  name: "tweet",
  initialState: {
    tweet: null,
    tweets: [],
  },
  reducers: {
    create(state, { type, payload }) {
      console.log(">>>>> tweet", payload);
      const tweet = {
        id: uuidv4(),
        text: payload.text,
        user: {
          id: payload.id,
        },
        createdAt: serverTimestamp(),
      };

      setDoc(doc(db, `tweets/${tweet.id}`), tweet, { merge: true });
    },

    read(state, { type, payload }) {
      state.tweets = [...payload];
    },
  },
});

const { create, read } = tweet.actions;

const fetch = (payload) => {
  return async (dispatch, getState) => {
    console.log(">>>>>>>>> called fetch");

    const newTweets = [];
    const q = query(collection(db, "tweets"), orderBy("createdAt", "desc"));
    const unsubscribe = await onSnapshot(q, async (snapshot) => {
      if (snapshot) {
        await snapshot.docChanges().forEach(async (change) => {
          // console.log(
          //   ">>>>>>>>>>>> change.type",
          //   change.type,
          //   change.newIndex,
          //   change.doc.data()
          // );

          if (change.type === "added") {
            if (change.doc.data().id) {
              const newIndex = change.newIndex;
              newTweets.splice(newIndex, 0, change.doc.data());
            }
          }

          if (change.type === "modified") {
            if (change.doc.data().id) {
              const newIndex = change.newIndex;
              newTweets.splice(newIndex, 1, change.doc.data());
            }
          }
        });
      }

      dispatch(read(newTweets));
    });
  };
};

export { create, read, fetch };
export default tweet;
