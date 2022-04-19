import React, { useEffect } from "react";
import { Header } from "../header/index";
import { connect } from "react-redux";
import { fetchMovies } from "../../store/movies/actions";
import MoviesContainer from "../moviesContainer/index";
import "./index.css";

interface PropsFromState {
  movies: [];
}

const Home: React.FC<PropsFromState> = ({ movies }) => {
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="body-container">
        <div className="tittle">Popular Now</div>
        <MoviesContainer movies={movies} />
      </div>
    </div>
  );
};
const mapStateToProps = (state: PropsFromState) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, fetchMovies)(Home);
