import { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import MovieCard from "./MovieCard";
import axios from "axios";
import FavouriteMovieCard from "./FavoriteMovieCard";

export default function Favorites({data, setData}) {

  useEffect(() => {
    axios.get("http://localhost:3000/favorites").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
      <div className="row d-flex gap-5 mt-5 px-5 justify-content-around">
        {data ? (
          data?.map((movie, index) => <FavouriteMovieCard key={index} movie={movie} setData={setData} />)
        ) : (
          <h1 className="text-white">loading...</h1>
        )}
        {data?.length === 0 && <h1 className="text-white">No movies</h1>}
      </div>
    
  );
}
