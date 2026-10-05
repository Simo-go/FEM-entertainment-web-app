import { createContext, useContext, useEffect, useReducer } from "react";

const MediaContext = createContext();
const initialState = {
  media: [],
  isLoading: false,
  isLoadingBookmark: false,
  error: "",
  bookmarkError: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "" };
    case "loadingBookmark":
      return { ...state, isLoadingBookmark: true, bookmarkError: "" };
    case "media/loaded":
      return { ...state, isLoading: false, media: action.payload };
    case "medium/updated": {
      const updatedMedia = state.media.map(medium => (medium.id === action.payload.id ? action.payload : medium));

      return { ...state, isLoading: false, media: updatedMedia };
    }
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    case "bookmarkError":
      return { ...state, isLoadingBookmark: false, error: action.payload };
    default:
      throw new Error("Unknown action for media");
  }
}

function MediaProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function updateMedium(id, newValue) {
    dispatch({ type: "loadingBookmark" });
    try {
      const res = await fetch(`http://localhost:3000/media/${id}`, {
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

  useEffect(function () {
    async function fetchMovies() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch("http://localhost:3000/media");

        if (!res.ok) throw new Error("Problem during fetching of media");

        const data = await res.json();
        dispatch({ type: "media/loaded", payload: data });
      } catch (err) {
        console.log(err.message);
        dispatch({ type: "error", payload: err.message });
      }
    }

    fetchMovies();
  }, []);

  return <MediaContext.Provider value={{ state, updateMedium }}>{children}</MediaContext.Provider>;
}

function useMedia() {
  const context = useContext(MediaContext);
  if (context === undefined) throw new Error("Cannot access MediaContext outside of Provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MediaProvider, useMedia };
