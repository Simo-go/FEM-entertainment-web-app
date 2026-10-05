import MediaBox from "./MediaBox";
import MoviesList from "./MoviesList";

function TvSeries() {
  return (
    <MediaBox>
      <h2 className="title text-preset-1">TV Series</h2>
      <MoviesList />
    </MediaBox>
  );
}

export default TvSeries;
