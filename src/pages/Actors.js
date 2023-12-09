import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then((r) => r.json())
    .then((actor) => setActors(actor))
  },[])

  const actorInfo = actors.map((actor) => {
    return(
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>{actor.movies.map((actorMovie) => (
          <li key={actorMovie}>{actorMovie}</li>
        ))}</ul>
      </article>
    )
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorInfo}
      </main>
    </>
  );
};

export default Actors;
