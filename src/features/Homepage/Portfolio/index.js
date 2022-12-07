import { Header, Section, Text, Title } from "./styled";
import { ReactComponent as GithubIcon } from "../images/github.svg";

const Portfolio = () => {
  return (
    <Section>
      <Header>
        <GithubIcon fill="#0366D6" />
        <Title>Portfolio</Title>
        <Text>My recent projects</Text>
      </Header>
    </Section>
  );
};

export default Portfolio;
