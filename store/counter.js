import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
    },
  },
});

const { add, minus } = counter.actions;

export { add, minus };
// export default counter.reducer;
export default counter;
