import { useEffect, useState } from "react";
import { getSearchMovie } from "../../API/SearchMovie";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params] = useSearchParams();
  const query = params.get("query");

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchData() {
      try {
        const data = await getSearchMovie(query);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <>
      <SearchForm />
      {loading && <Loader />}
      {error && <Error />}
    </>
  );
}
