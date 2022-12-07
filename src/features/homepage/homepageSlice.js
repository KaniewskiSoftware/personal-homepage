import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    darkMode: false,
    gitHubInfo: [],
    operationStatus: "",
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    fetchGitHubInfo: (state) => {
      state.operationStatus = "pending";
    },
    fetchGitHubInfoSuccess: (state, { payload: gitHubInfo }) => {
      state.gitHubInfo = gitHubInfo;
      state.operationStatus = "success";
    },
    fetchGitHubInfoError: (state) => {
      state.operationStatus = "error";
    },
  },
});

export const {
  toggleDarkMode,
  fetchGitHubInfo,
  fetchGitHubInfoSuccess,
  fetchGitHubInfoError,
} = homepageSlice.actions;

const selectHomepageState = (state) => state.homepage;

export const selectOperationStatus = (state) =>
  selectHomepageState(state).operationStatus;

export default homepageSlice.reducer;
