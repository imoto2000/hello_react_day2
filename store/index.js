import { configureStore } from "@reduxjs/toolkit";
import reducer from "@/store/counter";

export default configureStore({
  reducer: {
    counter: reducer,
  },
});
