import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieDetails from "./Movies/MovieList";
import Movie from "./Movies/Movie";


const App = () => {

  const [savedList, setSavedList] = useState([]);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieDetails} />
      <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
