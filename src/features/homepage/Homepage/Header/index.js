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
        Welcome to my portfolio! I am passionate about computer programming for
        some time now. A few years ago, I did some programming in C and C++ at
        university. A year ago, I took up some frontend courses starting with
        the basics of html, css and js. Since last October, I've been regularly
        honing my skills in these three technologies, expanding my range with
        React and TypeScript. Right now I'm actively looking for some oportunity
        to start my profesional journey as Frontend Developer. Let's connect and
        figure out how we can collaborate on your next project!
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
