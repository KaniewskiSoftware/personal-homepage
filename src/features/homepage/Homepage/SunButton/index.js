import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toggleDarkMode } from "../../homepageSlice";
import { Circle, Container, Content, SunContainer, Text } from "./styled";
import { ReactComponent as Sun } from "../images/sun.svg";

const SunButton = () => {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  return (
    <Container>
      <Text>dark mode {darkMode ? "on" : "off"}</Text>
      <Content onClick={() => dispatch(toggleDarkMode())}>
        <Circle active={darkMode}>
          <SunContainer>
            <Sun />
          </SunContainer>
        </Circle>
      </Content>
    </Container>
  );
};

export default SunButton;
