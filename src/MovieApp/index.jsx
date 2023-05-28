import { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import MovieCard from "./MovieCard";
import axios from "axios";
import { apiCall } from "../services/apiService";

export default function Home({ data, setData }) {
  const loadData = async () => {
   const tempData = await apiCall(
     "https://www.omdbapi.com/?s=Titanic&apikey=263d22d8", 'get'
   );
   setData(tempData.Search);
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="row d-flex gap-5 mt-5 px-5 justify-content-around">
      {data ? (
        data?.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <h1 className="text-white">loading...</h1>
      )}
      {data?.length === 0 && <h1 className="text-white">No movies</h1>}
    </div>
  );
}
