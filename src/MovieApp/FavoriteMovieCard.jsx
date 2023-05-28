import axios from "axios";
import { apiCall } from "../services/apiService";

export default function FavouriteMovieCard({ movie, setData }) {
  const handleDelete = async (id) => {
    await apiCall(`http://localhost:3000/favorites/${id}`, "delete");
    const tempData = await apiCall("http://localhost:3000/favorites", "get");
    setData(tempData);
  };

  const handleUpdate = async (id) => {
    const data = {
      ...movie,
      Title: "Hmue Thet Paing Kyaw",
    };
    await apiCall(`http://localhost:3000/favorites/${id}`, "put", data);
    const tempData = await apiCall("http://localhost:3000/favorites", "get");
    setData(tempData);
  };

  return (
    <div className="card col-3">
      <img
        src={movie.Poster}
        className="card-img-top"
        alt="..."
        style={{
          height: "200px",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{`${movie.Title} (${movie.Year})`}</h5>
        <button
          className="btn btn-warning"
          onClick={() => handleUpdate(movie.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(movie.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
