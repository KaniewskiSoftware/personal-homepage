import { Wrapper, Image, Content, MiniText, Title, Text, HireButton, MessageIcon } from "./styled";
import picture from "./images/picture.jpeg";
const Header = () => {
  return (
    <Wrapper>
      <Image src={picture} alt="" />
      <Content>
        <MiniText>this is</MiniText>
        <Title>Patryk Kaniewski</Title>
        <Text>
          I'm deeply intrested in self improvement. One of my goals is to become
          front-end developer. Currently learing from youcode Frontend Developer
          course.
        </Text>
        <HireButton>
            <MessageIcon />
            Hire Me
        </HireButton>
      </Content>
    </Wrapper>
  );
};

export default Header;
