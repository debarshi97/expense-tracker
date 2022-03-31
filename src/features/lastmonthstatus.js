import { createSlice, createSelector,PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import {url} from "../resources/Strings";
import axios from "axios";

export const fetchLastMonthStatusData = createAsyncThunk(
    "lms/fetchLastMonthStatusData", async (_, thunkAPI) => {
       try {
            const response = await axios
            .get(`${url}/last-month-status`)
            .then((response) => {
              return response.data;
            });
            return response;
        } catch (error) {
           return thunkAPI.rejectWithValue({ error: error.message });
        }
  });


export const lmsSlice = createSlice({
  name: "lms",
  initialState: {
    value: {},
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLastMonthStatusData.pending, (state) => {
            // console.log("Loading... ", state);
            state.value = {};
            state.loading = "loading";
      });
      builder.addCase(
        fetchLastMonthStatusData.fulfilled, (state, { payload }) => {
            // console.log("Loaded... ", payload);
            state.value = payload;
            state.loading = "loaded";
            // console.log("State ", state.value);
      });
      builder.addCase(
        fetchLastMonthStatusData.rejected,(state, action) => {
            state.loading = "error";
            state.error = action.error.message;
      });
  }
});

export const selectLastMonthStatus = createSelector(
    (state) => ({
        value: state.lms.value,
        loading: state.lms.loading,
    }), (state) =>  state
  );

// export const { fetchStatementData } = statementSlice.actions;
 
// export default statementSlice;
export default lmsSlice.reducer;
