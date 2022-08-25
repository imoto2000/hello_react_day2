import { configureStore } from "@reduxjs/toolkit";
import counter from "@/store/counter";
import account from "@/store/account";
import tweet from "@/store/tweet";
import user from "@/store/user";

export default configureStore({
  reducer: {
    counter: counter.reducer,
    account: account.reducer,
    user: user.reducer,
    tweet: tweet.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
