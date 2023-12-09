import { Flex } from "components/Custom";

import RightContentHeader from "../RightContentHeader/RightContentHeader";
import RightContentBody from "../RightContentBody/RightContentBody";

const RightContent = () => {
  return (
    <Flex $flex={1} $direction="column">
      <RightContentHeader />
      <RightContentBody />
    </Flex>
  );
};

export default RightContent;
