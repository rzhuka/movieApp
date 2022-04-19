import { FETCH_MOVIES } from "./types";

export default function moviesReducer(
  movies = [],
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case FETCH_MOVIES: {
      movies = action.payload;
      break;
    }
  }
  return movies;
}
