import { Header, Text, Title } from "./styled";
import { ReactComponent as GithubIcon } from "../images/github.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGitHubRepos } from "../../homepageSlice";
import Tiles from "./Tiles";

const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGitHubRepos());
  }, [dispatch]);
  return (
    <Header>
      <GithubIcon fill="#0366D6" />
      <Title>Portfolio</Title>
      <Text>My recent projects</Text>
      {}
      <Tiles></Tiles>
    </Header>
  );
};

export default Portfolio;
