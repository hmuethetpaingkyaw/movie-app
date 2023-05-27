import { Outlet } from "react-router";
import NavBar from "../Components/Navbar";

export default function DefaultLayout ({setData}) {
    return (
      <div className="container-fluid bg-black" style={{ minHeight: "100vh" }}>
        <NavBar setData={setData} />

        <Outlet />
      </div>
    );
}