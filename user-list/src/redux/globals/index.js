// @flow
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDataAPI } from "../../api";
// import { setApiErrorMessage } from "reduxStore/globals";
// import { openUrl } from "utils";

export const fetchUserData = createAsyncThunk(
  "fetchAccountData",
  (_, { dispatch }) => {
    return getUserDataAPI()
      .then((data) => {
        //I need to delete totalCaount feiled from respnse data, because its alwas null
        //And as the response data is an Object, I need to pars it to Array
        delete data.totalCount;
        return Object.values(data);
      })
      .catch((error) => {
        // dispatch(setApiErrorMessage(error));
      });
  }
);

export const userReducer = createSlice({
  name: "user",
  initialState: {
    userData: [],
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
      state.userData = action.payload;
    },
  },
});

export default userReducer.reducer;
