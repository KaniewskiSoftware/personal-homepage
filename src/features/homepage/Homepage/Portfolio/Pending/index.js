import { Text, Loader } from "./styled";

const Pending = () => (
  <>
    <Text> Please wait, projects are being loaded...</Text>
    <Loader />
  </>
);

export default Pending;