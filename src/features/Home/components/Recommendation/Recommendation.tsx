import { Box } from "components/Custom";
import Slider from "../Slider/Slider";
import useFetchAllManga from "hooks/query/useFetchAllManga";

const Recommendation = () => {
  const { data, isLoading } = useFetchAllManga();

  return (
    <Box as="section" $width="100vw" $marginBottom={16} $padding="0px 5px">
      {!isLoading && <Slider data={data} />}
    </Box>
  );
};

export default Recommendation;
