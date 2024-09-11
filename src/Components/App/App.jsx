import "./App.css";
import { Suspense, useState } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
// import HomePage from "../../Pages/HomePage/HomePage";
// import MoviesPage from "../../Pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "../../Pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "../MovieCast/MovieCast";
// import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
// import MovieReviews from "../MovieReviews/MovieReviews";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../Pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
