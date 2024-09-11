import { useParams } from "react-router-dom";
import { getReviewMovie } from "../../API/ReviewsMovie";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await getReviewMovie(movieId);
        setReviews(response);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      <ul className={css.list}>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
