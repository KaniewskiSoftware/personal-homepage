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
        Welcome to my portfolio! As a passionate and communicative Frontend
        Developer, I'm eager to showcase my growing body of work. Be sure to
        check out my latest project, the movies-browser-ts-rq repository, which
        highlights my advanced skills. I value strong communication and
        teamwork, and I'm always seeking opportunities to expand my skill set.
        Don't miss the chance to connect with me - let's explore how we can
        collaborate on your next project!
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
