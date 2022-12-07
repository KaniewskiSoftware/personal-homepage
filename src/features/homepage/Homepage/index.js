import Container from "./Container";
import Header from "./Header";
import Tile from "./Tile";
import Portfolio from "./Portfolio";
import { skillsToInclude } from "./skills/skillsToInclude";
import { skillsToLearn } from "./skills/skillsToLearn";
import { TitleIcon } from "./StyledComponents";
import tools from "./images/tools.svg";
import rocket from "./images/rocket.svg";

function Homepage() {
  return (
    <Container>
      <Header />
      <Tile
        title={
          <>
            My skillset includes
            <TitleIcon src={tools} />
          </>
        }
        skills={skillsToInclude}
      />
      <Tile
        title={
          <>
            What I want to learn next
            <TitleIcon src={rocket} />
          </>
        }
        skills={skillsToLearn}
      />
      <Portfolio />
    </Container>
  );
}

export default Homepage;
