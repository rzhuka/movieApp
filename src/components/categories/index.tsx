import React, { useEffect } from "react";
import { Header } from "../header/index";
import { connect } from "react-redux";
import { fetchCategories } from "../../store/categories/actions";
import "./index.css";

interface PropsFromState {
  categories: [];
}

const Categories: React.FC<PropsFromState> = ({ categories }) => {
  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(categories);
  const categoriesContainer =
    categories &&
    categories.map(({ id, name }) => {
      return (
        <div key={id} className="col-2 m-1">
          <div className="card card-body bg-dark text-center h-100">
            <h5 className="text-light card-title">{name}</h5>
          </div>
        </div>
      );
    });
  return (
    <div className="home-container">
      <Header />
      <div className="categories-container">{categoriesContainer}</div>
    </div>
  );
};

const mapStateToProps = (state: PropsFromState) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, fetchCategories)(Categories);
