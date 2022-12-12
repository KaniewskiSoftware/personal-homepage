import { Danger, Header, Text } from "./styled";
import { ButtonLink } from "../../../StyledComponents";

const Error = () => (
  <>
    <Danger />
    <Header>Ooops! Something went wrong!</Header>
    <Text>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </Text>
    <ButtonLink
      github
      href="https://github.com/st4rkmano"
      target="_blank"
      rel="noreferrer noopener"
    >
      Go to Github
    </ButtonLink>
  </>
);

export default Error;
