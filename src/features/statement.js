import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topic: "Balance",
  data: [
    {
      property: "wallet",
      value: 256057,
    },
    {
      property: "bank",
      value: 12245750,
    },
  ],
};

export const statementSlice = createSlice({
  name: "statement",
  initialState: {
    value: initialState,
  },
  reducers: {

  }
});

export default statementSlice.reducer;
