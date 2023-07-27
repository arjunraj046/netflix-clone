import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import Axios from "../../Axios";
import { API_KEY, imageUrl } from "../../constants/Constants";
import Youtube from "react-youtube";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);

  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    Axios.get(props.url)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        //alert('Network error')
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log("ID",id);
    Axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(
      (response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log(response.data, "array empty...!! ");
        }
      }
    );
  };

  return (
    <div>
      <h2 className="row">{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default Rowpost;
