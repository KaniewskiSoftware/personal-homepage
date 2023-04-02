import { MiniText } from "../StyledComponents";
import { Wrapper, Mail, Text, IconsList, Link } from "./styled";
import { socials } from "./socials";
import { email } from "../email";

const Footer = () => (
  <Wrapper>
    <MiniText as="h2">let's talk</MiniText>
    <Mail href={`mailto:${email}`} rel="noopener noreferrer" title={email}>
      {email}
    </Mail>
    <Text>
      Hit me whenever you have some proposal. I'm open to talk about new
      projects or jobs. Any feedback is welcome!
    </Text>
    <IconsList>
      {socials.map(({ title, url, Icon }) => (
        <li key={title}>
          <Link
            href={url}
            title={title}
            target="_blank"
            rel="nooreferrer nooopener"
          >
            <Icon />
          </Link>
        </li>
      ))}
    </IconsList>
  </Wrapper>
);

export default Footer;
