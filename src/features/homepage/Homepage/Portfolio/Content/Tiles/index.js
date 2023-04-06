import { useSelector } from "react-redux";
import { selectGitHubRepos } from "../../../../homepageSlice";
import { Title, Wrapper, Tile, Link, Text } from "./styled";

const Tiles = () => {
  const repos = useSelector(selectGitHubRepos);
  const excluded = [
    "KaniewskiSoftware",
    "personal-homepage",
    "Spotify-access-hub",
  ];

  const reposFiltered = repos.filter((repo) => {
    const isExcluded = excluded.includes(repo.name);
    const isPracticeRepo = repo.name.startsWith("practice-");

    return !isExcluded && !isPracticeRepo;
  });

  return (
    <Wrapper>
      {reposFiltered.map((repo) => (
        <Tile key={repo.id}>
          <Title>{repo.name}</Title>
          <Text description>{repo.description}</Text>
          <Text>
            Demo:
            <Link
              href={`https://${repo.owner.login}.github.io/${repo.name}/`}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub Pages
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
