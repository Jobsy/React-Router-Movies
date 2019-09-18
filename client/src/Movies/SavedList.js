import React from 'react';
import { Link } from "react-router-dom";

const SavedList = props => (
  console.log("////: ", props),
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      console.log("jjjjj: ", movie),
     <Link to={`/movies/${movie.id}`}>
      <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default SavedList;
