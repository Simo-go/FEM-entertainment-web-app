import { useMedia } from "../../contexts/MediaProvider";
import MediaBox from "../mediabox/MediaBox";
import MediaList from "../medialist/MediaList";

function TvSeries() {
  const {
    state: { media },
  } = useMedia();

  const series = media.filter(media => media.category.toLowerCase() === "tv series").toSorted((a, b) => b.year - a.year);

  return (
    <MediaBox>
      <h2 className="title text-preset-1">TV Series</h2>
      <MediaList media={series} />
    </MediaBox>
  );
}

export default TvSeries;
