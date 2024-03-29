import { useSelector } from "react-redux";
import { selectGitHubRepos } from "../../../../homepageSlice";
import { Title, Wrapper, Tile, Link, Text } from "./styled";

const Tiles = () => {
  const repos = useSelector(selectGitHubRepos);

  const chosen = {
    1: "airbnb-clone",
    2: "movies-browser-ts-rq",
    3: "movie-browser",
    4: "personal-homepage",
    5: "todos-list-react",
    6: "currency-converter-react",
  };
  const reposFiltered = [];

  const reposMap = new Map(repos.map((repo) => [repo.name, repo]));

  Object.keys(chosen)
    .sort()
    .forEach((key) => {
      const repoName = chosen[key];
      const repo = reposMap.get(repoName);
      if (repo) {
        reposFiltered.push(repo);
      }
    });

  return (
    // https://randomideas-ahxc.onrender.com/
    <Wrapper>
      {reposFiltered.map((repo) => (
        <Tile key={repo.id}>
          <Title>{repo.name}</Title>
          <Text description>{repo.description}</Text>
          <Text>
            Demo:
            <Link
              href={`${repo.homepage}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Homepage
            </Link>
          </Text>
          <Text>
            Code:
            <Link
              code
              href={repo.html_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Repository
            </Link>
          </Text>
        </Tile>
      ))}
    </Wrapper>
  );
};

export default Tiles;
