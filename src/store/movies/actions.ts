import { FETCH_MOVIES } from "./types";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=229674cc515dadd4d9a58b14317687d7&language=en-US&page=1`
      );
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.results,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
