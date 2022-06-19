// @flow
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDataAPI } from "../../api";
// import { setApiErrorMessage } from "reduxStore/globals";
// import { openUrl } from "utils";

export const fetchUserData = createAsyncThunk(
  "fetchAccountData",
  (_, { dispatch }) => {
    console.log("dispatch");
    return getUserDataAPI()
      .then((data) => {
        console.log("data", data);
        return data;
      })
      .catch((error) => {
        // dispatch(setApiErrorMessage(error));
      });
  }
);

export const userReducer = createSlice({
  name: "user",
  initialState: {
    userData: null,
    warningMessage: "",
  },
  reducers: {
    setUserDat: (state, action) => {
      state.userData = action.payload;
    },
    setWarningMessage: (state, action) => {
      state.warningMessage = action.payload;
    },
  },
  extraReducers: {
    [fetchUserData.fulfilled]: (state, action) => {
      state.account = action.payload;
    },
  },
});

export default userReducer.reducer;
