import React from "react";
import WatchedBox from "./WatchedBox";
import ListBox from "./ListBox";
import MovieList from "./MovieList";

const Main = ({ movies }) => {
  return (
    <main className="main">
      <ListBox movies={movies}>
        <MovieList movies={movies} />
      </ListBox>
      <WatchedBox />
    </main>
  );
};

export default Main;
