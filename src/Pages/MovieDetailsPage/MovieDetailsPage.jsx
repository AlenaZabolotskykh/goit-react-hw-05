import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getDetailsMovie } from "../../API/DetailsMovie";
import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getDetailsMovie(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            width="300px"
          />
          <h1>{movie.title}</h1>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul>
          <h2>Edditional information</h2>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
}
