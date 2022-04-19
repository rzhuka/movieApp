import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovie } from "../../../store/movie/actions";

const MovieContainer = ({}) => {
  const [state, setState] = useState({
    title: "",
    genres: [],
    release_date: "",
    vote_average: 0.0,
    overview: "",
    backdrop_path: "",
  });
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      let info = await fetchMovie(id);
      setState(info);
    }
    fetchData();
  }, [id]);
  console.log(state);
  const { title, genres, release_date, overview, vote_average, backdrop_path } =
    state;
  const imgPath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;
  let result = genres && genres.map((a) => a["name"]);
  console.log(result);
  let movieInfo = state && (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={imgPath} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4 movie-title">{title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {result}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {release_date}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong> {vote_average}
            </li>

            {/* <li className="list-group-item">
              <strong>Director:</strong> {movie.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer:</strong> {movie.Writer}
            </li> */}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About </h3>
            {overview}
            <hr />
            {/* <a
              href={'https://www.imdb.com/title/' + movie.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on IMDB
            </a> */}
            <Link to="/" className="btn btn-default text-light">
              Go Back To Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return <div className="movie-container">{movieInfo}</div>;
};

export default MovieContainer;
