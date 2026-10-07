import { BrowserRouter, Navigate, Route, Routes } from "react-router";
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
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";
import LoginAndRegistrationLayout from "./pages/loginandregistrationlayout/LoginAndRegistrationLayout";

const Home = lazy(() => import("./components/home/Home"));
const Movies = lazy(() => import("./components/movies/Movies"));
const TvSeries = lazy(() => import("./components/tvseries/TvSeries"));
const Bookmarks = lazy(() => import("./components/bookmarks/Bookmarks"));
const Search = lazy(() => import("./components/search/Search"));
const AppLayout = lazy(() => import("./pages/applayout/AppLayout"));
const LoginForm = lazy(() => import("./components/loginform/LoginForm"));
const RegistrationForm = lazy(() => import("./components/registrationform/RegistrationForm"));

function App() {
  return (
    <AuthProvider>
      <MediaProvider>
        <BrowserRouter useTransitions={false}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<LoginAndRegistrationLayout />}>
                <Route
                  index
                  element={
                    <Navigate to="/login" replace>
                      <LoginForm />
                    </Navigate>
                  }
                />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
              </Route>
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
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MediaProvider>
    </AuthProvider>
  );
}

export default App;
