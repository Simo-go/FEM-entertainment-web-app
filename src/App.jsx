import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

// import AppLayout from "./pages/AppLayout";
// import Home from "./components/home/Home";
// import Movies from ;
// import TvSeries from "./components/tvseries/TvSeries";
// import Bookmarks from "./components/bookmarks/Bookmarks";
// import Search from "./components/search/Search";
import { MediaProvider } from "./contexts/MediaProvider";
import PageLoader from "./components/loader/PageLoader";

const Home = lazy(() => import("./components/home/home"));
const Movies = lazy(() => import("./components/movies/Movies"));
const TvSeries = lazy(() => import("./components/tvseries/TvSeries"));
const Bookmarks = lazy(() => import("./components/bookmarks/Bookmarks"));
const Search = lazy(() => import("./components/search/Search"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <MediaProvider>
      <BrowserRouter useTransitions={false}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="series" element={<TvSeries />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path=":page/search" element={<Search />} />
              <Route path="/search" element={<Search />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MediaProvider>
  );
}

export default App;
