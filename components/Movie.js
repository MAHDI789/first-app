import Image from "next/image";
import { useGlobalContext } from "../context/ContextApi";
const Movie = ({
  title,
  poster_path,
  vote_average,
  backdrop_path,
  overview,
}) => {
  const IMAGE = "https://image.tmdb.org/t/p/w500";
  const IMAGEWHOLE = "https://image.tmdb.org/t/p/w1280";
  const { GetDetailMovie } = useGlobalContext();
  return (
    <div
      className="movies h-80 rounded-md shadow-lg cursor-pointer"
      onClick={() =>
        GetDetailMovie(title, `${IMAGEWHOLE}${backdrop_path}`, overview)
      }
    >
      {poster_path ? (
        <img
          src={`${IMAGE}${poster_path}`}
          alt={`${title}`}
          className="h-full w-full"
        />
      ) : null}
      <div
        className="flex justify-between p-2 items-center bg-sky-500"
        style={{ height: "58px" }}
      >
        <h5 className="text-white font-bold">{title}</h5>
        <span
          className={`font-bold p-2 text-white ${
            vote_average >= 8
              ? "bg-green-500"
              : vote_average >= 6
              ? "bg-orange-500"
              : "bg-red-600"
          }`}
        >
          {vote_average}
        </span>
      </div>
    </div>
  );
};

export default Movie;
