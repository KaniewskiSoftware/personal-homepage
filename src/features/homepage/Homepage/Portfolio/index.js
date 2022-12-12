import { Wrapper, Text, Title, Icon } from "./styled";
import { ReactComponent as GithubIcon } from "../images/github.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGitHubRepos } from "../../homepageSlice";
import Projects from "./Projects";

const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGitHubRepos());
  }, [dispatch]);

  return (
    <Wrapper>
      <Icon>
        <GithubIcon />
      </Icon>
      <Title>Portfolio</Title>
      <Text>My recent projects</Text>
      <Projects />
    </Wrapper>
  );
};

export default Portfolio;
