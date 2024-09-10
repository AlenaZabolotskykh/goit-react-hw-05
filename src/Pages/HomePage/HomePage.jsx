import { useEffect, useState } from "react";
import { getTrendMovies } from "../../API/trendingApi";
import { Link } from "react-router-dom";
import Error from "../../Components/Error/Error";
import Loader from "../../Components/Loader/Loader";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getTrendMovies();
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      {loading && <Loader />}
      {error && <Error />}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
