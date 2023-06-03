import { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import MovieCard from "./MovieCard";
import axios from "axios";
import { apiCall } from "../services/apiService";

export default function Home() {
  const [data, setData] = useState(null);

  const loadData = async () => {
    axios.defaults.headers = 'something';
    await axios
      .get(`https://www.omdbapi.com/?s=Titanic&apikey=263d22d8`)
      .then(function (response) {
        if (response.data.Search) {
          setData(response.data.Search);
        } else {
          setData([]);
        }
      });
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleFilter = async (value) => {
     axios.defaults.headers = "something";
    if (value === "") {
      value = "Titanic";
    }
    await axios
      .get(`https://www.omdbapi.com/?s=${value}&apikey=263d22d8`)
      .then(function (response) {
        if (response.data.Search) {
          setData(response.data.Search);
        } else {
          setData([]);
        }
      });
  };
  return (
    <div className="row d-flex gap-5 mt-5 px-5 justify-content-around">
      <div className="row d-flex justify-content-end">
        <div className="col-5">
          <input
            className="form-control"
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleFilter(e.target.value);
              }
            }}
          />
        </div>
      </div>
      {data ? (
        data?.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <h1 className="text-white">loading...</h1>
      )}
      {data?.length === 0 && <h1 className="text-white">No movies</h1>}
    </div>
  );
}
