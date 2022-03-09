import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";

//api key
import apiKey from "./config";
const key = apiKey;

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Routes>
          <Route
            exact
            path="/:search"
            element={<PhotoContainer apiKey={key} />}
          />
          <Route path="/" element={<Navigate replace to="/search" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
