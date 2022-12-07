import { Header, Text, Title } from "./styled";
import { ReactComponent as GithubIcon } from "../images/github.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGitHubInfo } from "../../homepageSlice";

const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGitHubInfo());
  }, [dispatch]);
  return (
    <Header>
      <GithubIcon fill="#0366D6" />
      <Title>Portfolio</Title>
      <Text>My recent projects</Text>
    </Header>
  );
};

export default Portfolio;
