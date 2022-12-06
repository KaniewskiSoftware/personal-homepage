import Container from "./Container";
import Header from "./Header";
import Tile from "./Tile";
import { skillsToInclude } from "./skills/skillsToInclude";
import { skillsToLearn } from "./skills/skillsToLearn";
import { TitleIcon } from "./StyledComponents";
import tools from "./images/tools.png";
import rocket from "./images/rocket.png";

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
    </Container>
  );
}

export default Homepage;
