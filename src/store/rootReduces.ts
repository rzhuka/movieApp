import { combineReducers } from "redux";
import categoriesReducer from "./categories/reducers";
import moviesReducer from "./movies/reducer";

export default combineReducers({
  movies: moviesReducer,
  categories: categoriesReducer,
});
