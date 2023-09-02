import { useState } from "react";
import requests from "../../Request";
import { useEffect } from "react";
import axios from "axios";

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="w-full h-[500px]   text-white relative">
      <div className="w-full h-full">
        <div className="w-full h-full absolute bg-gradient-to-r from-black"></div>
        <img
          className="h-[500px] w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-24 p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="m-4">
            <button className="border bg-gray-300 border-gray-300 py-2 px-5 text-black">
              play
            </button>
            <button className="border bg-black text-white border-gray-300 py-2 px-5 ml-5">
              watch later
            </button>
          </div>
          <p className="text-gray-400 sm">Released:{movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
