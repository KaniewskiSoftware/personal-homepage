import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Homepage from "./features/homepage/Homepage";
import { selectDarkMode } from "./features/homepage/homepageSlice";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
