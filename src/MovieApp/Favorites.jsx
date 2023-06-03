import { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import MovieCard from "./MovieCard";
import axios from "axios";
import FavouriteMovieCard from "./FavoriteMovieCard";
import { apiCall } from "../services/apiService";

export default function Favorites() {
  const [data, setData] = useState(null);

  const loadData = async () => {
     const tempData = await apiCall("http://localhost:3000/favorites", "get");
     setData(tempData);
  }
  useEffect(() => {
    loadData()
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
