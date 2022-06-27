// @flow
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDataAPI, getUserDataByIdAPI } from "../../api";
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
        dispatch(setWarningMessage(error));
      });
  }
);

export const fetchUserDataById = createAsyncThunk(
  "fetchUserDataById",
  (userId, { dispatch }) => {
    return getUserDataByIdAPI(userId)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        dispatch(setWarningMessage(error));
      });
  }
);

export const globals = createSlice({
  name: "user",
  initialState: {
    userData: [],
    userProfileData: [],
    selectedUserIds: [],
    warningMessage: "",
  },
  reducers: {
    setSelectedUserIds: (state, action) => {
      state.selectedUserIds = action.payload;
    },
    setWarningMessage: (state, action) => {
      state.warningMessage = action.payload;
    },
  },
  extraReducers: {
    [fetchUserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [fetchUserDataById.fulfilled]: (state, action) => {
      state.userProfileData = action.payload;
    },
  },
});

const { setSelectedUserIds, setWarningMessage } = globals.actions;
export { setSelectedUserIds, setWarningMessage };
export default globals.reducer;
