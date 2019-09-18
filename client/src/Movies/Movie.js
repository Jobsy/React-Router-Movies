import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import MovieDetails from "../MovieDetails";


const Movie = (props) => {

  const [movie, setMovie] = useState({ stars: [] });
  const id = props.match.params.id;

  useEffect(() => {
    // const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieDetails key={movie.id} movie={movie} />,
        <div className="save-button">
        <Link onClick={() => saveMovie()}>Save</Link>
          </div>
    </div>
  );
}

export default Movie;
