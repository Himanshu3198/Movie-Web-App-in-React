import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
// import { regular } from '@fortawesome/fontawesome-svg-core' // <-- import styles to be used
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
 
          <FontAwesomeIcon icon={faEye} />
      </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
                      <FontAwesomeIcon icon={faTimes} />

          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
          <FontAwesomeIcon icon={faBookmark}/>
            
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
          <FontAwesomeIcon icon={faTimes} />          
          </button>
        </>
      )}
    </div>
  );
};
