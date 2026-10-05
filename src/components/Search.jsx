import MediaBox from "./MediaBox";
import MoviesList from "./MoviesList";

function Search() {
  return (
    <MediaBox>
      <h2 className="title text-preset-1">Found X resutls for '[QUERY]'</h2>
      <MoviesList />
    </MediaBox>
  );
}

export default Search;
