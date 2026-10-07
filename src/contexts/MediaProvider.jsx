import { createContext, useCallback, useContext, useEffect, useReducer } from "react";

const MediaContext = createContext();
const initialState = {
  media: [],
  isLoading: false,
  isLoadingBookmark: false,
  error: "",
  bookmarkError: "",
};
const BASE_URL = "http://localhost:3000/media/";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "" };
    case "loaded":
      return { ...state, isLoading: false };
    case "loadingBookmark":
      return { ...state, isLoadingBookmark: true, bookmarkError: "" };
    case "media/loaded":
      return { ...state, isLoading: false, media: action.payload };
    case "medium/updated": {
      const updatedMedia = state.media.map(medium => (medium.id === action.payload.id ? action.payload : medium));

      return { ...state, isLoadingBookmark: false, media: updatedMedia };
    }
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    case "bookmarkError":
      return { ...state, isLoadingBookmark: false, bookmarkError: action.payload };
    default:
      throw new Error("Unknown action for media");
  }
}

function MediaProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function updateMedium(id, newValue) {
    dispatch({ type: "loadingBookmark" });
    try {
      const res = await fetch(`${BASE_URL}${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isBookmarked: newValue,
        }),
      });
      if (!res.ok) throw new Error("Problem during updating of medium's bookmarked value");

      const data = await res.json();
      console.log(data);

      dispatch({ type: "medium/updated", payload: data });
    } catch (err) {
      console.log(err);
      dispatch({ type: "bookmarkError" });
    }
  }

  const fetchMedia = useCallback(async function fetchMedia(signal) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}`, { signal: signal });

      if (!res.ok) throw new Error("Problem during fetching of media");

      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err.message);

      if (err.name === "AbortError") return;
      dispatch({ type: "error", payload: err.message });
    }
  }, []);

  /**
   * Searches for media based on a query string. NOTE! This function simulates a fetching based on a query by fetching all media and then filtering locally
   * @param {String} query String to search media by
   * @param {String} scope Scope to search for: media | movies | series
   */
  const getMediaBy = useCallback(
    async function getMediaBy(query, scope = "media", signal, bookmarkedOnly = false) {
      const media = await fetchMedia(signal);
      if (!media) return;
      dispatch({ type: "loaded" });

      const queryStrings = query.toLowerCase().split(" ");
      let filteredMedia;

      if (scope === "media") filteredMedia = media.filter(medium => queryStrings.some(str => medium.title.toLowerCase().includes(str)));
      if (scope === "movies")
        filteredMedia = media
          .filter(medium => medium.category.toLowerCase() === "movie")
          .filter(movie => queryStrings.some(str => movie.title.toLowerCase().includes(str)));
      if (scope === "series")
        filteredMedia = media
          .filter(medium => medium.category.toLowerCase() === "tv series")
          .filter(serie => queryStrings.some(str => serie.title.toLowerCase().includes(str)));

      if (bookmarkedOnly) filteredMedia = filteredMedia.filter(media => media.isBookmarked);

      return filteredMedia;
    },
    [fetchMedia],
  );

  useEffect(
    function () {
      async function updateMedia(signal) {
        const data = await fetchMedia(signal);
        if (!data) return; // abort signal present
        dispatch({ type: "media/loaded", payload: data });
      }

      console.log("uploading state");

      const controller = new AbortController();
      updateMedia(controller.signal);

      return () => controller.abort();
    },
    [fetchMedia],
  );

  return <MediaContext.Provider value={{ state, updateMedium, getMediaBy }}>{children}</MediaContext.Provider>;
}

function useMedia() {
  const context = useContext(MediaContext);
  if (context === undefined) throw new Error("Cannot access MediaContext outside of Provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MediaProvider, useMedia };
