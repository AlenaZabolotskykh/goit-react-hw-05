import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzk5NjZjNzhjYzgzMWU3YzEwZTMyZGQzNjIwOWU2ZCIsIm5iZiI6MTcyNTg5NTM3Mi43MDc2Nywic3ViIjoiNjZkZjEwOTkyNGM0M2M3MzgxOWFjNmZhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wHTQ33RHZp-POOLhPAKKjdpyEsqQCeibQoxksiXjo6c",
  },
};

export const getTrendMovies = async () => {
  const response = await axios.get(url, options);
  return response.data.results;
};
