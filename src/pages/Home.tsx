import { Box } from "components/Custom";
import HotNew from "features/Home/components/HotNew/HotNew";
import Recommendation from "features/Home/components/Recommendation/Recommendation";

const Home = () => {
  return (
    <Box as="main" $padding="5px 0" $marginTop="56px">
      <Recommendation />
      <HotNew />
    </Box>
  );
};

export default Home;
