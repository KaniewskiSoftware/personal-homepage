import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    darkMode: false,
    gitHubRepos: [],
    operationStatus: "",
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    fetchGitHubRepos: (state) => {
      state.operationStatus = "pending";
    },
    fetchGitHubReposSuccess: (state, { payload: gitHubRepos }) => {
      state.gitHubRepos = gitHubRepos;
      state.operationStatus = "success";
    },
    fetchGitHubReposError: (state) => {
      state.operationStatus = "error";
    },
  },
});

export const {
  toggleDarkMode,
  fetchGitHubRepos,
  fetchGitHubReposSuccess,
  fetchGitHubReposError,
} = homepageSlice.actions;

const selectHomepageState = (state) => state.homepage;

export const selectOperationStatus = (state) =>
  selectHomepageState(state).operationStatus;

export const selectGitHubRepos = (state) => 
  selectHomepageState(state).gitHubRepos;

export default homepageSlice.reducer;
