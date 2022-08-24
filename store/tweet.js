import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/plugins/firebase";
import { deleteDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";

const tweet = createSlice({
  name: "tweet",
  initialState: {
    tweet: null,
    tweets: null,
  },
  reducers: {
    create(state, { type, payload }) {
      console.log(">>>>> tweet", payload.text);
      const tweet = {
        id: uuidv4(),
        text: payload.text,
        user: {
          id: null,
        },
        createdAt: serverTimestamp(),
      };

      setDoc(doc(db, `tweets/${tweet.id}`), tweet, { merge: true });
    },

    read(state, { type, payload }) {
      state.count = state.count - payload;
    },
  },
});

const { create, read } = tweet.actions;

export { create, read };
export default tweet;
