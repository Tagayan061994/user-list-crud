import { createSelector } from "reselect";

export const getGlobalStore = (state) => {
  return state.globals;
};

export const selectUserData = createSelector(
  [getGlobalStore],
  (globals) => globals.userData
);
