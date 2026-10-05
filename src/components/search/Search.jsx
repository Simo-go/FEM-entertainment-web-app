import MediaBox from "../mediabox/MediaBox";
import MediaList from "../medialist/MediaList";

function Search() {
  return (
    <MediaBox>
      <h2 className="title text-preset-1">Found X resutls for '[QUERY]'</h2>
      {/* <MediaList /> */}
    </MediaBox>
  );
}

export default Search;
