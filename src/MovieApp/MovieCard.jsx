import axios from "axios";
import { useNavigate } from "react-router";
import { apiCall } from "../services/apiService";

export default function MovieCard({movie}) {
  const navigate = useNavigate();
  const handleSave = async () => {
    // await axios
    //   .post("http://localhost:3000/favorites", movie)

    apiCall("favorites", 'post', movie);
      navigate('/favorites')
  }
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
          <button className="btn btn-warning" onClick={handleSave}>
            Add to favorites
          </button>
        </div>
      </div>
    );
}