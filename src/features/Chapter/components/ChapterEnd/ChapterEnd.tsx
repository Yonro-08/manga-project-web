import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ChapterEnd = () => {
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete("page");
    queryParams.delete("chapter");
    console.log(location);
  }, []);

  return (
    <div>
      <h2>ChapterEnd</h2>
    </div>
  );
};

export default ChapterEnd;
