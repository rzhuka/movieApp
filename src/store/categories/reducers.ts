import { FETCH_CATEGORIES } from "./types";

export default function categoriesReducer(
  categories = [],
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      categories = action.payload;
      break;
    }
  }
  return categories;
}
