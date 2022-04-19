import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Home from "./components/home/index";
import store from "./store/store";
import Categories from "./components/categories/index";
import Movie from "./components/moviesContainer/Movie";

function App() {
  const param = useParams();
  return (
    <div className="App">
      <div className="container-fluid m-0 p-0 app-body">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/movie/:id" element={<Movie />} />
              {/* <Route path="/products/:id" component={Product} /> */}
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;
