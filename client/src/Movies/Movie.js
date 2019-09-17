import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieDetails from "../MovieDetails";
import {Link} from "react-router-dom";


const Movie = (props) => {
  console.log("wwww: ", props)
  
  const [movie, setMovie] = useState({stars: []});
  // const [movie, setMovie] = useState([]);

  console.log("llll: ", movie)
  useEffect(() => {
    const id = props.match.params.id;
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

  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    
    const addToSavedList = props.addToSavedList;
    console.log("wwww2: ", props.addToSavedList);
    
    addToSavedList(movie)
    
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      {/* {movie.map(movie => ( */}
        <MovieDetails key={movie.id} movie={movie} />
        <div className="save-button">
          <Link onClick={() => console.log("Im clicked")}>Save</Link>
          </div>
      {/* ))} */}
    </div>
  );
  // const { title, director, metascore, stars } = movie;
  // // console.log("ssss: ", stars)
  // return (
  //   <div className="save-wrapper">
  //     <div className="movie-card">
  //       <h2>{title}</h2>
  //       <div className="movie-director">
  //         Director: <em>{director}</em>
  //       </div>
  //       <div className="movie-metascore">
  //         Metascore: <strong>{metascore}</strong>
  //       </div>
  //       <h3>Actors</h3>
  //       {stars.map(star => (
  //         <div key={star} className="movie-star">
  //           {star}
  //         </div>
  //       ))}
  //     </div>
  //     <div className="save-button">Save</div>
  //   </div>
  // );
}

export default Movie;
