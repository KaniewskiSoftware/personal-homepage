import { createSlice } from "@reduxjs/toolkit";
import { getDarkModeFromLocalStorage } from "./darkModeLocalStorage";

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    darkMode: getDarkModeFromLocalStorage(),
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

export const selectDarkMode = (state) => selectHomepageState(state).darkMode;

export default homepageSlice.reducer;
