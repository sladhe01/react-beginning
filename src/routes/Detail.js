import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const movie = (await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()).data.movie;
    setMovie(movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Detail</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <h2>rating: {movie.rating}</h2>
        </div>
      )}
    </div>
  );
};

export default Detail;
