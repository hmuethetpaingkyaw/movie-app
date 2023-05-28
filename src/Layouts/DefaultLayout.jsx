import { Outlet, useNavigate } from "react-router";
import NavBar from "../Components/Navbar";
import { useEffect } from "react";
import { getToken } from "../utils/cache";

export default function DefaultLayout ({setData}) {
  const navigate = useNavigate();
    const check = async ()=> {
        const token =  await getToken();
        console.log(token);
        if (!token) {
          navigate("/login");
        }
    }
    useEffect(()=> {
      check()
    },[])

    return (
      <div className="container-fluid bg-black" style={{ minHeight: "100vh" }}>
        <NavBar setData={setData} />

        <Outlet />
      </div>
    );
}