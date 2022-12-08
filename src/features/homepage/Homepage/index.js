import Container from "./Container";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import { skillsToInclude } from "./skillset/skillsToInclude";
import { skillsToLearn } from "./skillset/skillsToLearn";
import { TitleIcon } from "./StyledComponents";
import tools from "./images/tools.svg";
import rocket from "./images/rocket.svg";
import Footer from "./Footer";

function Homepage() {
  return (
    <Container>
      <Header />
      <Skills
        title={
          <>
            My skillset includes
            <TitleIcon src={tools} />
          </>
        }
        skills={skillsToInclude}
      />
      <Skills
        title={
          <>
            What I want to learn next
            <TitleIcon src={rocket} />
          </>
        }
        skills={skillsToLearn}
      />
      <Portfolio />
      <Footer/>
    </Container>
  );
}

export default Homepage;
