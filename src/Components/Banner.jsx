import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css';
function Banner() {
  let [detail, setDetail] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=7d07792ca57e31a084669693c8f03ad9"
      )
      .then(function (res) {
        console.log(res);

        console.log(res.data.results[0].poster_path);
        let data = res.data.results[0];
        setDetail(data);
      });
  }, []);

  if (detail === undefined) {
    return null;
  }

  return (
    <div
      className="h-md-banner bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.poster_path})`
      }}
    >
      <div className="text-xl text-white bg-gray-900/60 w-full p-4 text-center ">
        {detail.title}
      </div>
    </div>
  );
}

export default Banner;
