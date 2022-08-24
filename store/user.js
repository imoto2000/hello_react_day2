import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/plugins/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const user = createSlice({
  name: "user",
  initialState: {
    user: null,
    users: null,
  },
  reducers: {
    create(state, { type, payload }) {
      console.log(">>>>> user", payload.id);
      const user = {
        id: payload.id ? payload.id : uuidv4(),
        name: payload.name,
        email: payload.email,
        createdAt: serverTimestamp(),
      };

      setDoc(doc(db, `users/${user.id}`), user, { merge: true });
    },

    read(state, { type, payload }) {
      // state.count = state.count - payload;
    },
  },
});

const { create, read } = user.actions;

export { create, read };
export default user;
