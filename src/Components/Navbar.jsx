import axios from "axios";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function NavBar({ setData }) {

  const handleFilter = async (value) => {
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
    <div className="row bg-secondary text-white p-3">
      <div className="col d-flex justify-content-between">
        <NavLink to="/">
          <img
            src="https://fiverr-res.cloudinary.com/f_auto,q_auto,c_fill,g_center/v1/attachments/generic_asset/asset/70135c2d47b4a4892897524eb00e6a9a-1652447155030/logo-4.png"
            style={{
              width: "100px",
              height: "50px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          />
        </NavLink>
        <div className="d-flex justify-content-center align-items-center gap-5">
          <NavLink
            to="/favorites"
            style={{
              textDecoration: "none",
            }}
            className={({isActive})=> 
              // eslint-disable-next-line no-unused-expressions
              isActive ? 'bg-success p-2 rounded' : ''
            }
          >
            <h5
              style={{
                cursor: "pointer",
                color: "white",
              }}
            >
              Favorites
            </h5>
          </NavLink>
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
    </div>
  );
}
