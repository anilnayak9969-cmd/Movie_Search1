import { useEffect, useState } from "react";
import MovieList from "./MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="hero">
        <h1>🎬 Discover Movies</h1>
        <input
          className="form-control search-box"
          placeholder="Search movie..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <MovieList movies={filtered} />
    </>
  );
}

export default Home;