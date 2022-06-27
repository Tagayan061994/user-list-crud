import { createSelector } from "reselect";

export const getGlobalStore = (state) => {
  return state.globals;
};

export const selectUserData = createSelector(
  [getGlobalStore],
  (globals) => globals.userData
);

export const selectUserProfileData = createSelector(
  [getGlobalStore],
  (globals) => globals.userProfileData
);

export const getSelectedUserIds = createSelector(
  [getGlobalStore],
  (globals) => globals.selectedUserIds
);

export const getSelectedUserFromUserList = createSelector(
  [getSelectedUserIds, selectUserData],
  (selectedIds, userData) => {
    const acc = [];
    selectedIds.forEach((selecId) => {
      userData.forEach((item) => {
        if (item.id === selecId) {
          acc.push(item);
        }
      });
    });
    return acc;
  }
);
