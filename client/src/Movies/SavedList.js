import React from 'react';
import { Link } from "react-router-dom";


// const SavedList = props => (
// //  const uniqueList = new Set(props.list),

//   <div className="saved-list">
//     <h3>Saved Movies:</h3>
    
//     {props.list.map(movie => (
//       <Link to={`/movies/${movie.id}`}>
//         <span className="saved-movie">{movie.title}</span>
//       </Link>
//     ))}
//     <div className="home-button">
//       <Link to="/">Home</Link>
//     </div>
//   </div>
// );

const SavedList = props => {
  console.log(props.list)
   const uniqueList = [...(new Set(props.list))]
   console.log(uniqueList)

   return  (
   <div className="saved-list">
      <h3>Saved Movies:</h3>
      
      {uniqueList.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
        </Link>
      ))}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
    )
};

export default SavedList;
