import { Wrapper, Image, Content, Title, Text, MessageIcon } from "./styled";
import { ButtonLink, MiniText } from "../StyledComponents";
import picture from "../images/picture.jpg";
import { email } from "../email";

const Header = () => (
  <Wrapper>
    <Image src={picture} alt="Patryk" />
    <Content>
      <MiniText>this is</MiniText>
      <Title>Patryk Kaniewski</Title>
      <Text>
        I'm deeply intrested in self improvement. One of my goals is to become
        front-end developer. Currently learing from youcode Frontend Developer
        course.
      </Text>
      <ButtonLink
        href={`mailto:${email}`}
        title={email}
        rel="noopener noreferrer"
      >
        <MessageIcon />
        Hire Me
      </ButtonLink>
    </Content>
  </Wrapper>
);

export default Header;
