import { Link } from "react-router-dom";

function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.map((item) => (
        <div className="col-md-3 mb-4" key={item.id}>
          <div className="card movie-card">

            <img src={item.image} alt={item.title} />

            <div className="card-body text-center">
              <h5>{item.title}</h5>
              <p>⭐ {item.rating}</p>

              <Link to={`/movie/${item.id}`} className="btn btn-primary w-100">
                View Details
              </Link>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;