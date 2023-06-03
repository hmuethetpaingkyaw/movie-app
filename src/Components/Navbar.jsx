import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { getUser, removeToken, removeUser } from "../utils/cache";

export default function NavBar() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
 
  useEffect(()=> {
    const user = getUser();
    setUser(JSON.parse(user))
  },[])

  const handleLogout = () => {
    removeToken();
    removeUser();
    navigate('/login')
  }

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
          <span>{user?.email}</span>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
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
        </div>
      </div>
    </div>
  );
}
