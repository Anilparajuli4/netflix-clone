import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import axios from "axios";
import Movie from "./Movie";

function Row({ title, fetchURL, RowID }) {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(true);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  function sliderLeft() {
    var slider = document.getElementById("slider" + RowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  function sliderRight() {
    var slider = document.getElementById("slider" + RowID);
    slider.scrollLeft = slider.scrollLeft + 500;
    // console.log(slider.scrollRight);
  }

  return (
    <>
      <h2 className="font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className="bg-white left-0 text-black rounded-full opacity-40 cursor-pointer absolute hover:opacity-100 hidden group-hover:block z-10"
        />
        <div
          id={"slider" + RowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative Z-10 "
        >
          {movies.map((items, id) => {
            return (
              <Movie items={items} key={id} like={like} setLike={setLike} />
            );
          })}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-white right-0 text-black rounded-full opacity-40 cursor-pointer absolute hover:opacity-100 hidden group-hover:block z-10"
          size={40}
        />
      </div>
    </>
  );
}

export default Row;
