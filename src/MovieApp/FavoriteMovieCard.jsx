import axios from "axios";

export default function FavouriteMovieCard({ movie, setData }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/favorites/${id}`);
    await axios.get(`http://localhost:3000/favorites`).then((response) => {
      setData(response.data);
    });
  };

  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:3000/favorites/${id}`, {
      ...movie,
      Title: "Hmue Thet Paing Kyaw",
    });
     await axios.get(`http://localhost:3000/favorites`).then((response) => {
       setData(response.data);
     });
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
