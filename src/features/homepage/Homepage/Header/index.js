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
        Hi! I'm deeply passionate about computer programming as such. I can do
        it all day and still love it! Currently trying to become Frontend
        Developer. Checkout my portfolio below, but remember - It's still
        growing😁 Beyond all of that, I'm amazing, talkative and humble. I know,
        what work really means and I understand the importance of communication.
        Right now you have a unique opportunity to hire me. Make sure, you don't
        miss it.😉
        PS. I am eager to improve my current skills as well as acquire new ones.
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
