import { useMovies } from "../../contexts/MoviesProvider";
import MediaBox from "../mediabox/MediaBox";
import MoviesList from "../movieslist/MoviesList";

function TvSeries() {
  const {
    state: { movies: media },
  } = useMovies();

  const series = media.filter(media => media.category.toLowerCase() === "tv series").toSorted((a, b) => b.year - a.year);

  return (
    <MediaBox>
      <h2 className="title text-preset-1">TV Series</h2>
      <MoviesList movies={series} />
    </MediaBox>
  );
}

export default TvSeries;
