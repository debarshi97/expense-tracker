import { createSlice, createSelector,PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import { getStatementData } from "../resources/api";
import {url} from "../resources/Strings";
import axios from "axios";

// const initialState = {
//   topic: "Balance",
//   data: [
//     {
//       property: "wallet",
//       value: 256057,
//     },
//     {
//       property: "bank",
//       value: 12245750,
//     },
//   ],
// };

export const fetchStatementData = createAsyncThunk(
    "statement/fetchStatementData", async (_, thunkAPI) => {
       try {
            const response = await axios
            .get(`${url}/statement`)
            .then((response) => {
              return response.data;
            });
            return response;
        } catch (error) {
           return thunkAPI.rejectWithValue({ error: error.message });
        }
  });


export const statementSlice = createSlice({
  name: "statement",
  initialState: {
    value: {},
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatementData.pending, (state) => {
            // console.log("Loading... ", state);
            state.value = {};
            state.loading = "loading";
      });
      builder.addCase(
        fetchStatementData.fulfilled, (state, { payload }) => {
            // console.log("Loaded... ", payload);
            state.value = payload;
            state.loading = "loaded";
            // console.log("State ", state.value);
      });
      builder.addCase(
        fetchStatementData.rejected,(state, action) => {
            state.loading = "error";
            state.error = action.error.message;
      });
  }
});

export const selectStatementData = createSelector(
    (state) => ({
        value: state.statement.value,
        loading: state.statement.loading,
    }), (state) =>  state
  );

// export const { fetchStatementData } = statementSlice.actions;
 
// export default statementSlice;
export default statementSlice.reducer;
