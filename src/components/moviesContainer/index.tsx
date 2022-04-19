import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

interface PropsFromState {
  movies: [];
}

const MoviesContainer: React.FC<PropsFromState> = ({ movies }) => {
  const test =
    movies &&
    movies.map(({ id, title, backdrop_path }) => {
      const imgPath = `https://image.tmdb.org/t/p/w200${backdrop_path}`;
      return (
        <div
          key={id}
          className="col-2 m-1 movie-container "
          style={{ height: "250px" }}
        >
          <div className="card card-body bg-dark text-center h-100">
            <img className="w-100 mb-2" src={imgPath} alt="Movie Cover" />
            <h5 className="text-light card-title">{title}</h5>
            <Link className="btn  link-button" to={"/movie/" + id}>
              Movie Details
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      );
    });

  return <div className="movies-container">{test}</div>;
};

export default MoviesContainer;
