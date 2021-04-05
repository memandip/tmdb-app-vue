import axios from "axios";
import { genre } from "../store/modules";

export const getAll = async (cb: Function) => {
  const apiKey = process.env.VUE_APP_TMDB_API_KEY;
  const genreListApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
  await axios
    .get(genreListApiUrl)
    .then(({ data }) => {
      if (data && data.genres) {
        const genres = data.genres.splice(0, 13) as Array<genre.IGenre>;
        cb(genres);
      }
    })
    .catch((err) => {
      console.log({ err });
    });
};