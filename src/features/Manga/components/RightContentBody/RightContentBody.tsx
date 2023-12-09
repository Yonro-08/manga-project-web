import { Flex, Link } from "components/Custom";
import { useSearchParams } from "react-router-dom";

import MangaAbout from "../MangaAbout/MangaAbout";
import MangaChapters from "../MangaChapters/MangaChapters";
import MangaRoute from "../MangaRoute/MangaRoute";
import MangaSimilar from "../MangaSimilar/MangaSimilar";

import { useManga } from "hooks/zustand/useManga";

const RightContentBody = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pQuery = searchParams.get("p") || "";

  const { manga } = useManga();

  return (
    <Flex $width="100%" $align="flex-start">
      <Flex
        $direction="column"
        $align="flex-start"
        $width="100%"
        $padding="20px"
      >
        <MangaRoute $active={pQuery}>
          <Link
            to="?p=about"
            $padding="8px 16px"
            $borderRadius="8px"
            $size="12px"
            $lineHeight="1.5"
          >
            ОПИСАНИЕ
          </Link>
          <Link
            to="?p=chapters"
            $padding="8px 16px"
            $borderRadius="8px"
            $size="12px"
            $lineHeight="1.5"
          >
            ГЛАВЫ (397)
          </Link>
        </MangaRoute>
        {pQuery === "about" ? (
          <MangaAbout content={manga?.content} />
        ) : (
          <MangaChapters
            chapters={manga?.chapters}
            endpoint={manga?.endpoint}
          />
        )}
      </Flex>
      <MangaSimilar />
    </Flex>
  );
};

export default RightContentBody;
