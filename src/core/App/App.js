import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Homepage from "../../features/homepage/Homepage";
import { selectIsDarkMode } from "../../common/themeSlice";
import { GlobalStyle } from "./GlobalStyle";
import { themeLight, themeDark } from "./theme";

function App() {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
