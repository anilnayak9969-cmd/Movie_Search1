import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m) => m.id === Number(id));
        setMovie(found);
      });
  }, [id]);

  if (!movie) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="detail-card">

      <img src={movie.image} alt={movie.title} />

      <div>
        <h2>{movie.title}</h2>
        <p>⭐ {movie.rating}</p>
        <p><strong>Year:</strong> {movie.year}</p>
        <p>{movie.description}</p>
      </div>

    </div>
  );
}

export default MovieInfo;