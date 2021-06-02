import React, { useState } from "react";
import { movieData } from "./Component/MovieData";
import MovieList from "./Component/MovieList";
import Modal from "./Component/Model";
import StarsRating from "./Component/StarsRating";
import Search from "./Component/Search";
import "./App.css";
function App() {
  const [rate, setRate] = useState(0);
  const [search, setSearch] = useState("");
  const [MovieData, setMovies] = useState(movieData);
  return (
    <div>
      <StarsRating rate={rate} setRate={setRate} />
      <Search search={search} setSearch={setSearch} />
      <div className="modal">
        <Modal MovieData={MovieData} setMovies={setMovies} />
      </div>
      <MovieList rate={rate} search={search} MovieData={MovieData} />
    </div>
  );
}

export default App;
