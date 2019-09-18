import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";

import SavedList from './Movies/SavedList';
// import MovieList from "./Movies/MovieList";
import MovieDetails from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

console.log("]]]]]: ", savedList);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />,
      {/* <Movie saved={addToSavedList} />, */}
      {/* <Route exact path="/" component={MovieList} /> */}
      <Route exact path="/" component={MovieDetails} />

      {/* <Route path="/movies/:id" component={Movie} /> */}
      <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} />} />

    </div>
  );
};

export default App;
