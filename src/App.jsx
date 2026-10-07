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
import AuthProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";
import NoAuthPage from "./pages/noauthpage/NoAuthPage";

const Home = lazy(() => import("./components/home/home"));
const Movies = lazy(() => import("./components/movies/Movies"));
const TvSeries = lazy(() => import("./components/tvseries/TvSeries"));
const Bookmarks = lazy(() => import("./components/bookmarks/Bookmarks"));
const Search = lazy(() => import("./components/search/Search"));
const AppLayout = lazy(() => import("./pages/applayout/AppLayout"));
const Login = lazy(() => import("./pages/login/Login"));

function App() {
  return (
    <AuthProvider>
      <MediaProvider>
        <BrowserRouter useTransitions={false}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Login />} />
              <Route
                path="/app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="series" element={<TvSeries />} />
                <Route path="bookmarks" element={<Bookmarks />} />
                <Route path=":page/search" element={<Search />} />
                <Route path="search" element={<Search />} />
              </Route>
              <Route path="/no-access" element={<NoAuthPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MediaProvider>
    </AuthProvider>
  );
}

export default App;
