const localStorageKey = "darkMode";

export const saveDarkModeInLocalStorage = (darkMode) =>
  localStorage.setItem(localStorageKey, JSON.stringify(darkMode));

export const getDarkModeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || false;
