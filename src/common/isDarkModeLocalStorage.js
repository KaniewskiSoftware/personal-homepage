const localStorageKey = "isDarkMode";

export const saveIsDarkModeInLocalStorage = (isDarkMode) =>
  localStorage.setItem(localStorageKey, JSON.stringify(isDarkMode));

export const getIsDarkModeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || false;
