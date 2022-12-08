import { Danger, Header, Text } from "./styled";
import { BlueButton } from "../../StyledComponents";

const Error = () => {
  return (
    <>
      <Danger />
      <Header>Ooops! Something went wrong!</Header>
      <Text>
        Sorry, failed to load Github projects.
        <br />
        You can check them directly on Github.
      </Text>
      <BlueButton
        github
        href="https://github.com/st4rkmano"
        target="_blank"
        rel="noreferrer noopener"
      >
        Go to Github
      </BlueButton>
    </>
  );
};

export default Error;
