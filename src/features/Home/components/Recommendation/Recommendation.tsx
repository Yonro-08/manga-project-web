import RecommendationStyle from "./RecommendationStyle";
import Slider from "../Slider/Slider";

import useFetchAllManga from "hooks/query/useFetchAllManga";

const Recommendation = () => {
  const { data, isLoading } = useFetchAllManga();

  return (
    <RecommendationStyle>
      {!isLoading && data && <Slider data={data} />}
    </RecommendationStyle>
  );
};

export default Recommendation;
