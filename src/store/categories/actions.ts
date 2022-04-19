import { FETCH_CATEGORIES } from "./types";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=229674cc515dadd4d9a58b14317687d7&language=en-US`
      );
      dispatch({
        type: FETCH_CATEGORIES,
        payload: response.data.genres,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
