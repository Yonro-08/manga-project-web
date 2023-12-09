import { useQuery } from "@tanstack/react-query";

import { getManga } from "lib/api/manga";

const useFetchAllManga = () => {
  return useQuery({
    queryKey: ["allManga"],
    queryFn: () => {
      return getManga();
    },
  });
};

export default useFetchAllManga;
