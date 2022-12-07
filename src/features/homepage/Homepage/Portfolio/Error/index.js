import { Text } from "../styled";
import { Danger, Header } from "./styled";

const Error = () => {
  return (
    <>
      <Danger />
      <Header>Ooops! Something went wrong!</Header>
      <Text>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </Text>
    </>
  );
};

export default Error;
