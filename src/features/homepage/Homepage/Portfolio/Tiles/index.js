import { useSelector } from "react-redux";
import { selectGitHubRepos } from "../../../homepageSlice";
import { Title, Wrapper, Tile, Link, Text } from "./styled";

const Tiles = () => {
  const repos = useSelector(selectGitHubRepos);

  return (
    <Wrapper>
      {repos.map((repo) => (
        <Tile key={repo.id}>
          <Title>{repo.name}</Title>
          <Text description>{repo.description}</Text>
          <Text>
            Demo:{" "}
            <Link
              href={`https://${repo.owner.login}.github.io/${repo.name}/`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {`https://${repo.owner.login}.github.io/${repo.name}/`}
            </Link>
          </Text>
          <Text>
            Code:{" "}
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {repo.html.url}
            </Link>
          </Text>
        </Tile>
      ))}
    </Wrapper>
  );
};

export default Tiles;
