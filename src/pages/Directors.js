import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const[directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then((r) => r.json())
    .then((directorDetails) => setDirectors(directorDetails))
  }, [])

  const directorInfo = directors.map((director) => {
    return(
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie) => (
            <li key={movie[0]}>{movie}</li>
          ))}
        </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorInfo}
      </main>
    </>
  );
};

export default Directors;
