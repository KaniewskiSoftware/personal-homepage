import { Wrapper, Text, Title, Icon } from "./styled";
import { ReactComponent as GithubIcon } from "../images/github.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGitHubRepos, selectOperationStatus } from "../../homepageSlice";
import Tiles from "./Tiles";
import Pending from "./Pending";
import Error from "./Error";

const Portfolio = () => {
  const dispatch = useDispatch();
  const operationStatus = useSelector(selectOperationStatus);

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
      {operationStatus === "pending" && <Pending />}
      {operationStatus === "success" && <Tiles />}
      {operationStatus === "error" && <Error />}
    </Wrapper>
  );
};

export default Portfolio;
