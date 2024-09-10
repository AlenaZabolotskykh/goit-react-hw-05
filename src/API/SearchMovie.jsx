import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzk5NjZjNzhjYzgzMWU3YzEwZTMyZGQzNjIwOWU2ZCIsIm5iZiI6MTcyNTg5NTM3Mi43MDc2Nywic3ViIjoiNjZkZjEwOTkyNGM0M2M3MzgxOWFjNmZhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wHTQ33RHZp-POOLhPAKKjdpyEsqQCeibQoxksiXjo6c",
  },
};

export const getSearchMovie = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
    options
  );
  //   console.log(response.data);

  return response.data.results;
};
