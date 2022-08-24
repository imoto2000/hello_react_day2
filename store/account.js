import { createSlice } from "@reduxjs/toolkit";
import { auth } from "@/plugins/firebase";
import { signOut } from "firebase/auth";

const account = createSlice({
  name: "account",
  initialState: {
    id: null,
    name: null,
    email: null,
  },
  reducers: {
    signup(state, { type, payload }) {
      state.id = payload.id;
      state.email = payload.email;
      state.name = payload.name;
    },

    login(state, { type, payload }) {
      state.id = payload.id;
      state.email = payload.email;
      state.name = payload.name;
    },

    logout(state, { type, payload }) {
      signOut(auth);
      state.id = null;
      state.name = null;
      state.email = null;
    },
  },
});

const { login, logout, signup } = account.actions;
export { login, logout, signup };

// export default account.reducer;
export default account;
