import { useSearchParams } from "react-router";
import MediaBox from "../mediabox/MediaBox";
import MediaList from "../medialist/MediaList";
import { useEffect, useState } from "react";
import { useMedia } from "../../contexts/MediaProvider";

function Search() {
  let [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const scope = searchParams.get("scope");
  const [searchResults, setSearchResults] = useState();
  const { getMediaBy } = useMedia();

  useEffect(
    function () {
      async function getSearchResults() {
        const media = await getMediaBy(query, scope);
        console.log(media);
      }

      getSearchResults();
    },
    [query, scope, getMediaBy],
  );

  return (
    <MediaBox>
      <h2 className="title text-preset-1">Found X resutls for '[QUERY]'</h2>
      {/* <MediaList /> */}
    </MediaBox>
  );
}

export default Search;
