import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { useMedia } from "../../contexts/MediaProvider";

import MediaList from "../medialist/MediaList";
import MediaBox from "../mediabox/MediaBox";
import styles from "./Search.module.css";

function Search() {
  let [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const scope = searchParams.get("scope");
  const [searchResults, setSearchResults] = useState([]);
  const {
    getMediaBy,
    state: { isLoading },
  } = useMedia();

  console.log(searchResults, isLoading);

  useEffect(
    function () {
      const controller = new AbortController();

      async function getSearchResults() {
        const media = await getMediaBy(query, scope, controller.signal);
        if (!media) return;
        console.log(media);

        setSearchResults(media);
      }

      getSearchResults();

      return () => controller.abort();
    },
    [query, scope, getMediaBy],
  );

  return (
    <MediaBox>
      {searchResults.length === 0 ? (
        <div className={`text-preset-2 ${styles.noResults}`}>No search result found</div>
      ) : (
        <>
          <h2 className="title text-preset-1">
            Found {searchResults.length} resutls for '{query}'
          </h2>
          <MediaList media={searchResults} />
        </>
      )}
    </MediaBox>
  );
}

export default Search;
