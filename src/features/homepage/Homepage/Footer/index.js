import { MiniText } from "../StyledComponents";
import { Wrapper, Mail, Text, IconsList, Link } from "./styled";
import { socials } from "./socials";

const Footer = () => (
  <Wrapper>
    <MiniText>let's talk</MiniText>
    <Mail href="mailto:kaniewski.patryk@gmail.com" rel="noopener noreferrer">
      kaniewski.patryk@gmail.com
    </Mail>
    <Text>
      Hit me whenever you have some proposal. I'm open to talk about new
      projects or jobs.
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
