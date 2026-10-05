import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./pages/AppLayout";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import TvSeries from "./components/tvseries/TvSeries";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Search from "./components/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index path="/login" /> */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<TvSeries />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path=":page/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
