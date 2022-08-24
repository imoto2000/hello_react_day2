import { configureStore } from "@reduxjs/toolkit";
import counter from "@/store/counter";
import account from "@/store/account";

export default configureStore({
  reducer: {
    counter: counter.reducer,
    account: account.reducer,
  },
});
