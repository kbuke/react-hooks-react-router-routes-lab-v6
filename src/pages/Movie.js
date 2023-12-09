import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const[movie, setMovie] =useState([])
  const params = useParams()
  const movieId = params.id
  console.log(movieId)

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then((r) => r.json())
    .then((movieData) => setMovie(movieData))
    .catch((error) => console.log(error))
  },[movieId])

  if(!movie.title){
    return <h1>Loading...</h1>
  }

  // const movieDetails = movie.map((movieInfo) => {
  //   return(
  //     <div>
  //       <h1>{movieInfo.title}</h1>
  //       <p>{movieInfo.title}</p>
  //       {movieInfo.genres.map((movieGenre) => (
  //         <span>{movieGenre}</span>
  //       ))}
  //     </div>
  //   )
  // })


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <p>Genres: 
          {movie.genres.map((movieGenre) => (
            <span>{movieGenre}</span>
          ))}
        </p>
      </main>
    </>
  );
};

export default Movie;
