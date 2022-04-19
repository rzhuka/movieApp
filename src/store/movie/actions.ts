import axios from "axios";

export const fetchMovie = async (id: any) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=229674cc515dadd4d9a58b14317687d7`
    );
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};
