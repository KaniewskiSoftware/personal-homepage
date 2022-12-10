import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleIsDarkMode } from "../themeSlice";
import { Circle, Container, Content, SunContainer, Text } from "./styled";
import { ReactComponent as Sun } from "./icons/sun.svg";

const SunButton = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>dark mode {isDarkMode ? "on" : "off"}</Text>
      <Content onClick={() => dispatch(toggleIsDarkMode())}>
        <Circle active={isDarkMode}>
          <SunContainer>
            <Sun />
          </SunContainer>
        </Circle>
      </Content>
    </Container>
  );
};

export default SunButton;
